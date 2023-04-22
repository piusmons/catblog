import "./singlePost.css"
import { db } from "../../firebase"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { doc, getDoc, deleteDoc } from "firebase/firestore"
import { onAuthStateChanged} from "firebase/auth"
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"


export default function SinglePost() {
    const [title, setTitle] = useState();
    const [info, setInfo] = useState();
    const [authUser, setAuthUser] = useState(null);
    const postId = useParams()
    
    const docRef = doc(db, "post", postId.postId)
        getDoc(docRef)
            .then((doc) => {
               setTitle(doc.data().title)
               setInfo(doc.data().info)
               

            })

    const handleDelete = async (e) => {
        const delPostRef = doc(db, 'post', postId.postId)
        
        try {
            await deleteDoc(delPostRef)
            Navigate("/home")
            console.log(postId.postId)
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
      }, []);
    
            
    

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i.imgur.com/AD3MbBi.jpeg" alt="" className="singlePostImg"></img>
            
            <h1 className="singlePostTitle">{title}
                <div className="singlePostEdit">
                {
                 authUser ?   (<>
                    
                    <Link to={`/update/${postId.postId}`}><i className="singlePostIcon1 far fa-edit"/></Link>
                    <i className="singlePostIcon2 far fa-trash-alt" onClick={handleDelete}></i>
                    </>) : (null)
                }
                </div>
            </h1>
            <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author: <b> wewmon</b></span>
                 <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc"> {info}</p>
            
           </div>

        </div>
    )
}