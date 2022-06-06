import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from 'react';

const Tasks = () => {
    const { currentUser } = useAuth();

    const [tasks, setTasks] = useState({ id: "", emaiL: "", todo: []});
    const [taskUtils, setTasksUtils] = useState({isAddingTask: false, nameIsEmpty: false});

    const addTekstRef = useRef();
    const addTakstDescRef = useRef();

    useEffect(() => {
        getDocs(collection(getFirestore(), 'userTasks')).then(snap => {
            snap.docs.forEach(ele => {
                if(ele.data().email === currentUser.email) setTasks({ id: ele.id, ...ele.data() });
            });
        }).catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTaskAdd = () => {
        if(addTekstRef.current.value !== "") {
            setTasksUtils(prevState => ({...prevState, nameIsEmpty: false}))
            let newTasks = tasks;
            newTasks.todo.push({name: addTekstRef.current.value, desc: addTakstDescRef.current.value});
            setTasks(newTasks);
            setTasksUtils({isAddingTask: false});
            update(newTasks);
        } else {
            setTasksUtils(prevState => ({...prevState, nameIsEmpty: true}))
        }
    }

    const resetAll = () => {
        let newTask = tasks;
        newTask.todo = [];
        setTasks(prevState => ({...prevState, todo: []}));
        update(newTask);
    }

    const reset = (i) => {
        let newTask = tasks;
        newTask.todo.splice(i, 1);
        setTasks(prevState => ({ ...prevState, todo: newTask.todo }))
        update(newTask);
    }

    const update = (task) => {
        updateDoc(doc(getFirestore(), "userTasks", task.id), task);
    }

    return ( 
        <main className="content adder">
            <div className="inner tasks">
                <article className="main taskList">
                    <h1>Add Task</h1>
                    <ul className='taskLister'>
                        {
                            tasks.id !== "" && tasks.todo.map((ele, i) => {
                                return <li key={i}><h6>{ele.name}</h6> {ele.desc} <input type="button" value="X" className='reset' onClick={() => reset(i)} /></li>
                            })
                        }
                    </ul>
                </article>
                <div className="opts">
                    <input type="button" className='taskOptBtn addTask' value="Add Task" onClick={() => setTasksUtils((prevState) => ({...prevState, isAddingTask: !prevState.isAddingTask}))}/><br/>
                    {tasks.todo.length >= 2 && <input type="button" className='taskOptBtn resetAll' value="Reset All" onClick={resetAll} />}
                    {taskUtils.isAddingTask && <div className='addInput'>
                        <input type="text" ref={addTekstRef} className='taskOptBtn addTask'/><br />
                        <input type="text" ref={addTakstDescRef} className='taskOptBtn addTask'/><br />
                        <input type="button" onClick={handleTaskAdd} value="Add" className='taskOptBtn addTask'/>
                        {taskUtils.nameIsEmpty && <span className='error'>Name Cannot be empty.</span>}
                    </div>}
                </div>
            </div>
        </main>
    );
}
 
export default Tasks;