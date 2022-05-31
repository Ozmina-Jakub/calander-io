import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwdRef = useRef();

    return ( 
        <main className="content adder">
            <div className="inner reg">
                <h1>Login</h1>
                <form action="" method="post" className="form">
                    <label htmlFor="email">E-mail:<input type="email" name="email" ref={emailRef} id="email" /></label>
                    <label htmlFor="passwd">Password: <input type="password" ref={passwdRef} name="passwd" id="passwd" /></label>
                    <label htmlFor="submit"><input type="submit" value="Sign Up" /></label>
                    <p>New Here? <Link to="/Register">Create Free Account</Link></p>
                </form>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Login;