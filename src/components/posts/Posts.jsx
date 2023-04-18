import "./posts.css"
import Post from "../post/Post"
import { useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"

export default function Posts() {
    const [post, setPosts] = useState([])


    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}