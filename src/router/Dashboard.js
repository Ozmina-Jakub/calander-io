import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
const Dashboard = () => {

    const { currentUser } = useAuth();
    
    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Welcome {currentUser.email}</h1>
                <div className="opts">
                    <Link to="/Tasks"><input className='optBtn' type="button" value="Tasks" /></Link>
                    <Link to="/Pomodorro"><input className='optBtn' type="button" value="Pomodorro" /></Link>
                    <input className='optBtn' type="button" value="Coming Soon" />
                </div>
            </div>
        </main>
     );
}
 
export default Dashboard;