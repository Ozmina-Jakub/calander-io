import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

const Account = () => {
    return ( 
        <section className="sign">
            <div className="user">
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
        </section>
     );
}
 
export default Account;