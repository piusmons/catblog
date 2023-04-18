import "./topbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";



export default function TopBar() {
    const [authUser, setAuthUser] = useState(null);
    
    
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
    }, [authUser]);

    
  
   const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
        navigate("/login") 

    }

    return (
        
        <div className="top">
            <div className="top-left">
                <i class="top-icon fa-brands fa-facebook"></i>
                <i class="top-icon fa-brands fa-twitter"></i>
            </div>
            
            <div className="top-center">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">HOME</Link>
                    </li>
                
                    <li className="topListItem">
                        <Link to="/write">WRITE</Link>
                    </li>
                   
                    <li 
                    className="topListItem"
                    onClick={handleSignOut}
                    >{ authUser && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="top-right">
                {
                    authUser ? (
                        <img className="topImg"
                        src="https://i.imgur.com/vBEVee2.jpeg">
                        </img>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link  to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register">Register</Link>
                            </li>
                       
                        
                        
                        </ul>
                    )
                }
               
                <i class="searchIcon fa-solid fa-magnifying-glass"></i> 
            </div>
        </div>
    )

}