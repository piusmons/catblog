import "./write.css"
import { db, auth } from "../../firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";



export default function Write() {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    
   
    const collectionRef = collection(db, "post");

    const createPost = async () => {
        console.log('clicked')

        try {
            await addDoc(collection(db, "post"), {title, info, });
            console.log("document submitted")
        } catch(e) {
            console.error('error adding doc')
        }
        
    
    
        

    };
    

    
    return(
        <div className="write">
            <img className="writeImg" src="https://i.imgur.com/OW0N9YZ.jpeg"></img>
            <form className="writeForm" onClick={createPost} >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <input type="file"></input>
                    </label>
                    <input type="text" id="fileInput"style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)}/>                
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Write here" type="text" className="writeInput writeText" value={info} onChange={(e) => setInfo(e.target.value)}>

                        </textarea>
                    </div>
                    <button className="writeSubmit" >publish</button>
            </form>
        </div>
    )
}