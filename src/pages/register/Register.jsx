import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Register() { 
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })
    }
    
    
    
    
    return (

        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleRegister}>

                <label>Username</label>
                <input 
                className="registerInput" 
                type="text" 
                placeholder="Enter your username here"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                
                <label>Email</label>
                <input 
                className="registerInput" 
                type="text" 
                placeholder="Enter your email here" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input 
                className="registerInput" 
                type="password" 
                placeholder="Enter your password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton">Register</button>
            </form>
            
                
            <button className="registerLoginButton">
                <Link className="link" to="/login">login</Link>
            
            </button>
                
        </div>
    )
}

