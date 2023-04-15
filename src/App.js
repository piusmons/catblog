import TopBar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}> 
        </Route>
        <Route exact path="/register" element={user ? <Home/> : <Register/>}> 
        </Route>
        <Route exact path="/login" element={user ? <Home/> : <Login/>}> 
        </Route>
        <Route exact path="/write" element={user ? <Write/> : <Register/>}> 
        </Route>
        <Route exact path="/settings" element={user ? <Setting/> : <Register/>}> 
        </Route>
        <Route exact path="/post/:postId" element={<Single/>}> 
        </Route>
      </Routes>
      
    </Router>

    
  );
}

export default App;
