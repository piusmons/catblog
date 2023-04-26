import "./post.css"
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";





export default function Post({ title, info, id }) {
   
    
    return(
        <div className="post" >
            
            <div className="postInfo">
                
                <span className="postTitle">
                     
                    <Link className="link-title" to={`/post/${id}`}>{title}</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">{info}</p>
            

        </div>

    )

}