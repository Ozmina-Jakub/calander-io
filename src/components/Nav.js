import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {useState} from 'react';
import logo from './../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const Nav = () => {
    const [utilState, setutilState] = useState({isInMenu: false, isInRedirerctedSite: false, onSite: "home"});
    //TODO: Set util state in App and pass it to childrens

    const { currentUser, logout } = useAuth();

    const handleSiteRedirect = e => setutilState(prevState => ({...prevState, isInRedirerctedSite: true, onSite: e.target.name}))

    return ( 
        <nav className="menu" onMouseEnter={() => setutilState(prevState => ({...prevState, isInMenu: true}))} onMouseLeave={() => setutilState(prevState => ({...prevState, isInMenu: false}))}>
            <div className="menuOpt hamburger" style={utilState.onSite === "home" ? {backgroundColor: "#202020"} : {}} onClick={() => utilState.isInRedirerctedSite && setutilState(prevState => ({...prevState, isInRedirerctedSite: false, onSite: "home"}))}>
                {
                    (utilState.isInMenu) && <span className='text'>
                        {
                            (utilState.isInRedirerctedSite) ? 
                            (currentUser ? (<Link to="/Dashboard">Dashboard</Link>) : ( <Link to="/">Home</Link> )) : "Menu"
                        }
                    </span>
                }
                <FontAwesomeIcon className='menuIco' icon={faBars} />
            </div> {/* change menu option to redirect on div click instead text click */}
            {
                utilState.isInMenu && <>
                    <div className='menuOpt About' name="about" style={utilState.onSite === "about" ? {backgroundColor: "#202020"} : {}} onClick={e => handleSiteRedirect(e)}>
                        <span className="text">
                            <Link to="/About" name="about">About</Link>
                        </span>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className='menuOpt Contact' name="contact" style={utilState.onSite === "contact" ? {backgroundColor: "#202020"} : {}} onClick={e => handleSiteRedirect(e)}>
                        <span className="text">
                            <Link to="/Contact" name="contact">Contact</Link>
                        </span>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </>
            }
            {
                utilState.isInMenu && currentUser && <>
                    <div className="menuOpt LogOut" onClick={async () => await logout()}>
                    <span className="text">
                            <Link to="/" name="contact">LogOut</Link>
                        </span>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </>
            }
            <div className="menuOpt logo">
                
                {utilState.isInMenu && <span className='text'>CALANDER.IO</span>}
                <img src={logo} className="logoImg" alt="CALANDER.IO" />
            </div>
        </nav>
     );
}
 
export default Nav;