import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Account = () => {
    const { currentUser } = useAuth();
    if(currentUser) {
        return ( 
            <Link to="/Dashboard">
                <section className="sign">
                    <div className="account">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                </section>
            </Link>
         );
    } else {
        return ( 
            <Link to="/Login">
                <section className="sign">
                    <div className="user">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                </section>
            </Link>
         );
    }
}
 
export default Account;