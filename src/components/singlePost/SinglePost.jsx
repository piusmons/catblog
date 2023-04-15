import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i.imgur.com/AD3MbBi.jpeg" alt="" className="singlePostImg"></img>
            
            <h1 className="singlePostTitle">lorem ipsum
                <div className="singlePostEdit">
                    <i className="singlePostIcon1 far fa-edit"></i>
                    <i className="singlePostIcon2 far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author: <b> wewmon</b></span>
                 <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc"> orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil maiores perspiciatis voluptates excepturi
                 earum ab omnis vero ipsam! Reiciendis quas illo
                explicabo vel eveniet tempore minima, praesentium doloremque provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil maiores perspiciatis voluptates excepturi earum ab omnis vero ipsam! Reiciendis quas illo explicabo vel eveniet tempore minima, praesentium doloremque provident?</p>
            
           </div>

        </div>
    )
}