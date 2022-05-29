import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isUserInMenu, setIsUserInMenu] = useState(false);
    return ( 
        <nav className="menu" onMouseEnter={() => setIsUserInMenu(true)} onMouseLeave={() => setIsUserInMenu(false)}>
            <div className="hamburger">
                <FontAwesomeIcon className='menuIco' icon={faBars} />
            </div>
            {
                isUserInMenu && <>
                    <div className='menuOpt About'>
                        <span className="text">
                            About
                        </span>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className='menuOpt Contact'>
                        <span className="text">
                            Contact
                        </span>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </>
            }
            <div className="logo">
                <FontAwesomeIcon className='logoIco' icon={faClipboardCheck} />
            </div>
        </nav>
     );
}
 
export default Nav;