import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.imgur.com/60IA8cW.jpeg"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi ullam asperiores sit odio architecto alias facilis accusantium, aliquid tempora nam in modi aliquam ipsam provident sed nemo cupiditate eligendi?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">tech</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">demons</li>
                    <li className="sidebarListItem">cats</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
               <div className="sidebarSocial">
                    <i class="sidebar-icon fa-brands fa-facebook"></i>
                    <i class="sidebar-icon fa-brands fa-twitter"></i>
                
                </div> 
            </div>
        </div>
    )
}