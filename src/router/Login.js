import { useRef, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwdRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwdRef.current.value);
            navigate("/Dashboard");
        } catch {
            setError("Failed to sign to an account.")
        }

        setLoading(false);
    }

    return ( 
        <main className="content adder">
            <div className="inner reg">
                <h1>Login</h1>
                <form action="" method="post" className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:<input type="email" name="email" ref={emailRef} id="email" /></label>
                    <label htmlFor="passwd">Password: <input type="password" ref={passwdRef} name="passwd" id="passwd" /></label>
                    {error !== "" && <p className="error">{error}</p>}
                    <label htmlFor="submit"><input type="submit" value="Sign Up" disabled={loading}/></label>
                    <p>New Here? <Link to="/Register">Create Free Account</Link></p>
                </form>
            </div>
            <div className="decor"></div>
        </main>
    );
}
 
export default Login;