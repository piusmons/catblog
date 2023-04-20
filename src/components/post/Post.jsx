import "./post.css"
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";





export default function Post({ title, info, id }) {
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
    
    return(
        <div className="post" >
            <img
            className="postImg"
                src="https://i.imgur.com/5c1Z0Mi.jpeg"
            />
            <div className="postInfo">
                
                <span className="postTitle">
                     
                    <Link className="link" to={`/post/${id}`}>{title}</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">{info}</p>
            

        </div>

    )

}