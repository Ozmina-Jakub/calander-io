import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const emailRef = useRef();
    const passwdRef = useRef();
    const cpasswdRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        console.log(e);
        e.preventDefault();

        if(passwdRef.current.value !== cpasswdRef.current.value) {
            return setError("Psswords do not match.")
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwdRef.current.value);
        } catch {
            setError("Failed to create an account.")
        }
        setLoading(false);
    }

    return ( 
        <main className="content adder">
            <div className="inner reg">
                <h1>Register</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:<input type="email" name="email" ref={emailRef} id="email" /></label>
                    <label htmlFor="passwd">Password: <input type="password" ref={passwdRef} name="passwd" id="passwd" /></label>
                    <label htmlFor="cpasswd">Confirm Password: <input type="password" ref={cpasswdRef} name="cpasswd" id="cpasswd" /></label>
                    {error !== "" && <p className="error">{error}</p>}
                    <label htmlFor="submit"><input type="submit" value="Sign Up" disabled={loading}/></label>
                    <p>Already have an account? <Link to="/Login">Log In</Link></p>
                </form>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Register;