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
            <section className="heroBtn">
                <input type="button" value="TRY FRO FREE" className="heroBtnInput" />
                <div className="shadow"></div>
            </section>
        </main>
     );
}
 
export default Hero;