import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {

    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>profile picture</label>
                    <div className="settingsPP">
                        <img src="https://i.imgur.com/Jvh1OQm.jpeg"/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="meow"/>
                    <label>Email</label>
                    <input type="text" placeholder="meow@gmail.com"/>
                    <label>Password</label>
                    <input type="text"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>

    )
}