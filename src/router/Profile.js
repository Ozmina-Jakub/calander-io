import { useAuth } from '../context/AuthContext';
import { usePoints } from '../context/PointsContext';
import { Link } from "react-router-dom";

const Profile = () => {
    const { currentUser } = useAuth();
    const email = currentUser.email.split("@");
    const { points } = usePoints();
    console.log(currentUser.email);
    console.log(points);
    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Profile</h1>
                <div className="cnt">
                    Name: {email[0]}<br/>
                    E-Mail: {currentUser.email}<br/>
                    Points: {points.points}
                    <Link to="/Dashboard"><input type="button" className='taskOptBtn' value="Go Back" /></Link>
                </div>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Profile;