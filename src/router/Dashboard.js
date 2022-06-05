import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
const Dashboard = () => {

    const { currentUser } = useAuth();
    
    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Welcome {currentUser.email}</h1>
                <div className="opts">
                    <Link to="/tasks"><input type="button" value="Tasks" /></Link>
                </div>
            </div>
        </main>
     );
}
 
export default Dashboard;