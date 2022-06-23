import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
const Dashboard = () => {

    const { currentUser } = useAuth();
    
    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Welcome {currentUser.email}</h1>
                <div className="opts opt">
                    <Link to="/Tasks"><input className='optBtn' type="button" value="Tasks" /></Link>
                    <Link to="/Pomodorro"><input className='optBtn' type="button" value="Pomodorro" /></Link>
                    <Link to="/Profile"><input className='optBtn' type="button" value="Your Profile" /></Link>
                </div>
            </div>
        </main>
     );
}
 
export default Dashboard;