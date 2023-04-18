import "./post.css"
import { useState } from "react";

export default function Post() {
    

    return(
        <div className="post">
            <img
            className="postImg"
                src="https://i.imgur.com/5c1Z0Mi.jpeg"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">music</span>
                    <span className="postCat">life</span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum dolor sit amet consectetur adi
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur olor sit amet consectetur aolor sit amet consectetur aolor sit amet consectetur aolor sit amet consectetur aolor sit amet consectetur aolor sit amet consectetur a adipisicing elit. Natus aliquid quo voluptates excepturi a aut quia molestiae unde laudantium perspiciatis officiis nulla aspernatur et, ipsum est dolores fugit maiores! Corporis.</p>
        </div>

    )

}