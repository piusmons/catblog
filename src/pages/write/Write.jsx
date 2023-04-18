import "./write.css"
import { db } from "../../firebase"
import { collection, addDoc } from "firebase/firestore"
import { useState, useEffect } from "react";



export default function Write() {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');

    const collectionRef = collection(db, 'post');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "post"),{
                title: title,
                info: info,
            });
           
        } catch (e) {
            
        }
    }

    

    

    
    return(
        <div className="write">
            <img className="writeImg" src="https://i.imgur.com/OW0N9YZ.jpeg"></img>
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput"style={{display:"none"}} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" placeholder="Title" className="writeInput" autofocus={true} value={info} onChange={(e) => setInfo(e.target.value)}/>                
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Write here" type="text" className="writeInput writeText">

                        </textarea>
                    </div>
                    <button className="writeSubmit">publish</button>
            </form>
        </div>
    )
}