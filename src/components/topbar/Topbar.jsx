import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = true;


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
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write">WRITE</Link>
                    </li>
                   
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="top-right">
                {
                    user ? (
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