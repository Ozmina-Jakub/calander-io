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
                <span type="button" className="heroBtnInput">TRY FRO FREE</span>
                <div className="shadow"></div>
            </Link>
        </main>
     );
}
 
export default Hero;