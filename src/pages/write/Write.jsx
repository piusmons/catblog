import "./write.css"

export default function Write() {
    
    return(
        <div className="write">
            <img className="writeImg" src="https://i.imgur.com/OW0N9YZ.jpeg"></img>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput"style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autofocus={true}/>                
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