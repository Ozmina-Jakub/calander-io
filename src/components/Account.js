import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Account = () => {
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
 
export default Account;