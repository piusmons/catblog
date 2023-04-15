import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (

        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
            <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username here" />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email here" />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password here"/>
            </form>
            <button className="registerButton">Register</button>
                
            <button className="registerLoginButton">
                <Link className="link" to="/login">login</Link>
            
            </button>
                
        </div>
    )
}

