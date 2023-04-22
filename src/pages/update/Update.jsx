import "./update.css"
import { db, auth } from "../../firebase"
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function Write() {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const postId = useParams()
   
    const collectionRef = collection(db, "post");
    const docRef = doc(db, "post", postId.postId)


    useEffect(() => {
        getDoc(docRef)
            .then((doc) => {
               setTitle(doc.data().title)
               setInfo(doc.data().info)
               

            })


    },[])
    
        
    
    
    
        

    

    
    return(
        <div className="write">
            <img className="writeImg" src="https://i.imgur.com/OW0N9YZ.jpeg"></img>
            <form className="writeForm" onSubmit={() => updateDoc(docRef, {info, title})}  >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <input type="file"></input>
                    </label>
                    <input type="text" id="fileInput"style={{display:"none"}} />
                    <input type="text" placeholder={title} className="writeInput" autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)}/>                
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Write here" type="text" placeholder={info} className="writeInput writeText" value={info} onChange={(e) => setInfo(e.target.value)}>

                        </textarea>
                    </div>
                    <button className="writeSubmit" >publish</button>
            </form>
        </div>
    )
}