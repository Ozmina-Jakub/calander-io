import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from 'react';

const Tasks = () => {
    const { currentUser } = useAuth();

    const [tasks, setTasks] = useState({ id: "", emaiL: "", todo: []});
    const [taskUtils, setTasksUtils] = useState({isAddingTask: false});

    const addTekstRef = useRef();
    const addTakstDescRef = useRef();

    useEffect(() => {
        getDocs(collection(getFirestore(), 'userTasks')).then(snap => {
            snap.docs.forEach(ele => {
                if(ele.data().email === currentUser.email) {
                    setTasks({ id: ele.id, ...ele.data() });
                }
            });
        }).catch(err => console.log(err));
    }, []);

    const handleTaskAdd = () => {
        let newTasks = tasks;
        newTasks.todo.push({name: addTekstRef.current.value, desc: addTakstDescRef.current.value});
        setTasks(newTasks);
        setTasksUtils({isAddingTask: false});
        updateDoc(doc(getFirestore(), "userTasks", newTasks.id), newTasks);
    }

    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Add Task</h1>
                <article className="main">
                    <ol>
                        {
                            tasks.id !== "" && tasks.todo.map((ele, i) => {
                                return <li key={i}>{ele.name}: {ele.desc}</li>
                            })
                        }
                    </ol>
                </article>
                <div className="opts">
                    <input type="button" value="Add Task" onClick={() => setTasksUtils((prevState) => ({...prevState, isAddingTask: !prevState.isAddingTask}))}/>
                </div>
                {taskUtils.isAddingTask && <div className='addInput'>
                    <input type="text" ref={addTekstRef}/><br />
                    <input type="text" ref={addTakstDescRef} /><br />
                    <input type="button" onClick={handleTaskAdd} value="Add"/>
                </div>}
            </div>
        </main>
    );
}
 
export default Tasks;