import "./post.css"
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";




export default function Post({ title, info, id }) {
    const [authUser, setAuthUser] = useState(null);
    
    const handleDelete = async (e) => {
        const delPostRef = doc(db, 'post', id)
        
        try {
            await deleteDoc(delPostRef)
            console.log(id)
        } catch (err) {
            alert(err)
        }
    }
    
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
            {
                authUser ? (<button onClick={e => handleDelete()}></button>) : (null)
            }

        </div>

    )

}