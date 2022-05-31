import { Link } from "react-router-dom";

const Hero = () => {
    return ( 
        <main className="content">
            <header className="header">
                <h1>Calander.io</h1>
            </header>
            <article className="desc">
                <p>Manage your day with Us.</p>
                <p>
                    Try Calander by 
                    clicking on this button:
                </p>
            </article>
            <Link to="/Register" className="heroBtn">
                <input type="button" className="heroBtnInput" value="TRY FOR FREE"/>
            </Link>
        </main>
     );
}
 
export default Hero;