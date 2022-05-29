import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return ( 
        <nav className="menu">
            <div className="hamburger">
                <FontAwesomeIcon className='menuIco' icon={faBars} />
            </div>
            <div className="logo">
                <FontAwesomeIcon className='logoIco' icon={faClipboardCheck} />
            </div>
        </nav>
     );
}
 
export default Nav;