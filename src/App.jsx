// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Video from "./Component/Video";
import Profile from "./Component/Profile";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Edit from "./Component/Edit";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <div className="min-h-[100vh] min-w-[60]">
            <Routes>
              <Route path="/"         Component={Home} />
              <Route path="/Video"    Component={Video} />
              <Route path="/Profile"  Component={Profile} />
              <Route path="/Contact"  Component={Contact} />
              <Route path="/Login"    Component={Login} />
              <Route path="/Edit"     Component={Edit} />
            </Routes>
          </div>
          <footer className="footer footer-center bg-neutral-900 text-base-content p-4">
            <aside>
              <p className="text-xs">
                Copyright © {new Date().getFullYear()} - All right reserved by SYH 
              </p>
            </aside>
          </footer>
        </Router>
      </div>
    </>
  );
}

export default App;
