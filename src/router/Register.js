import { useRef, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    const emailRef = useRef();
    const passwdRef = useRef();
    const cpasswdRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [succes, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        if(passwdRef.current.value !== cpasswdRef.current.value) {
            return setError("Passwords do not match.")
        }

        if(passwdRef.current.value.length < 6) {
            return setError("Too weak Password. Password should be at least 6 chars long");
        } 

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwdRef.current.value);
        } catch {
            setLoading(false);
            return setError("Failed to create an account.")
        }

        setLoading(false);
        setSucces(true);
        setTimeout(() => {
            setSucces(false);
            navigate("/Dashboard");
        }, 3000);
    }

    return ( 
        <main className="content adder">
            <div className="inner reg">
                <h1>Register</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:<input type="email" name="email" ref={emailRef} id="email" required/></label>
                    <label htmlFor="passwd">Password: <input type="password" ref={passwdRef} name="passwd" id="passwd" required/></label>
                    <label htmlFor="cpasswd">Confirm Password: <input type="password" ref={cpasswdRef} name="cpasswd" id="cpasswd" required/></label>
                    {error !== "" && <p className="error">{error}</p>}
                    <label htmlFor="submit"><input type="submit" value="Sign Up" disabled={loading}/></label>
                    {succes && <p className="success">Succesfully Registered!</p>}
                    <p>Already have an account? <Link to="/Login">Log In</Link></p>
                </form>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Register;