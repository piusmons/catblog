import "./posts.css"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import { collection, doc, getDocs, query } from "firebase/firestore"
import { db } from "../../firebase"

export default function Posts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        (async () => {
            const colRef = collection(db, "post")
            const snapshot = await getDocs(colRef)
            const docs = snapshot.docs.map((doc) => ({
              ...doc.data(), id: doc.id,}))
            setPosts(docs)
            
            
            
            
        })()
    }, [posts])
    

    
    
    
    return (
        <div className="posts">
            {posts.map((post) => (
                <Post id={post.id} key={post.id} title={post.title} info={post.info}></Post>
            ))}
                
            
                 
            
            
        </div>
    )
}

