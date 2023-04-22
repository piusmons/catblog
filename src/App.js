import TopBar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Update from "./pages/update/Update"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import { auth } from "./firebase";



function App()  {
  const [authUser, setAuthUser] = useState(null);

    
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
    }, []);

  return (
    <Router>
    
      <TopBar />
     
      <Routes>
        <Route exact path="/" element={<Home/>}> 
        </Route>
        <Route exact path="/register" element={authUser ? <Home/> : <Register/>}> 
        </Route>
        <Route exact path="/login" element={authUser ? <Home/> : <Login/>}> 
        </Route>
        <Route exact path="/write" element={authUser ? <Write/> : <Register/>}> 
        </Route>
        <Route exact path="/settings" element={authUser ? <Setting/> : <Register/>}> 
        </Route>
        <Route exact path="/post/:postId" element={<Single/>}> 
        </Route>
        <Route exact path="/update/:postId" element={<Update/>}> 
        </Route>
      </Routes>
    
    </Router>
    

    
  );
}

export default App;
