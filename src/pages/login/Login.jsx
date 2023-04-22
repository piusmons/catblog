import "./login.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                console.log(userCredential)
           }).catch((error) => {
                 console.log(error);
        });
    };

    return (

        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={signIn}>

                <label>Email</label>
                <input 
                className="loginInput"
                type="text" 
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <label>Password</label>
                <input 
                className="loginInput" 
                type="password" 
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />

                <button className="loginButton">Login</button>  

            </form> 
            
            <button className="loginRegisterButton">
                <Link className="link" to="/register">register</Link>
            </button>
                
        </div>
    )
}

