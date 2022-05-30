import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Nav = ({utilState}) => {
    const handleSiteRedirect = e => utilState.setutilState(prevState => ({...prevState, isInRedirerctedSite: true, onSite: e.target.name}))

    return ( 
        <nav className="menu" onMouseEnter={() => utilState.setutilState(prevState => ({...prevState, isInMenu: true}))} onMouseLeave={() => utilState.setutilState(prevState => ({...prevState, isInMenu: false}))}>
            <div className="menuOpt hamburger" style={utilState.utilState.onSite === "home" ? {backgroundColor: "#202020"} : {}} onClick={() => utilState.utilState.isInRedirerctedSite && utilState.setutilState(prevState => ({...prevState, isInRedirerctedSite: false, onSite: "home"}))}>
                {utilState.utilState.isInMenu && <span className='text'>{utilState.utilState.isInRedirerctedSite ? <Link to="/">Home</Link> : "Menu"}</span>}
                <FontAwesomeIcon className='menuIco' icon={faBars} />
            </div> {/* change menu option to redirect on div click instead text click */}
            {
                utilState.utilState.isInMenu && <>
                    <div className='menuOpt About' style={utilState.utilState.onSite === "about" ? {backgroundColor: "#202020"} : {}} onClick={e => handleSiteRedirect(e)}>
                        <span className="text">
                            <Link to="/About" name="about">About</Link>
                        </span>
                        <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className='menuOpt Contact' style={utilState.utilState.onSite === "contact" ? {backgroundColor: "#202020"} : {}} onClick={e => handleSiteRedirect(e)}>
                        <span className="text">
                            <Link to="/Contact" name="contact">Contact</Link>
                        </span>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </>
            }
            <div className="menuOpt logo">
                
                {utilState.utilState.isInMenu && <span className='text'>CALANDER.IO</span>}
                <FontAwesomeIcon className='logoIco' icon={faClipboardCheck} />
            </div>
        </nav>
     );
}
 
export default Nav;