import React from "react";
import "./App.css";
import ManageBkgs from "./Components/ManageBkgs";
import { Route, Routes, BrowserRouter, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import notification from "./images/active.png";
import userImg from "./images/user.png";
import completed from "./images/checked.png";
import cancelled from "./images/close.png";
import upcoming from "./images/new.png";
import discountLogo from "./images/discount.png";
import CompanyLogo from "./images/lessgo logo1.jpg";
import downArrow from "./images/down-arrow.png";

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <div id="navBar">
        <div id="logo">
       <NavLink to="/">  <img src={CompanyLogo} alt="Company Logo"/></NavLink> 
        </div>
        <div id="bar-icons">
          <ul>
            <li id="disscount">
              <img src={discountLogo} title="Look For Offers" alt="Discount Logo" />
            </li>
            <li id="nottii">
              <img src={notification} title="You Have One Notification" alt="Notification" />
            </li>
            <li id="history">
              My Bookings
              <span id="downArrow">
                <img src={downArrow} alt="Down Arrow" />
              </span>
              <ul id="i-image" >
                <li>
                  <img src={completed} alt="Completed Trips" />Completed Trips
                </li>
                <li>
                  <img src={upcoming} alt="Upcoming Trips" />Upcoming Trips
                </li>
                <li>
                  <img src={cancelled} alt="Cancelled Trips" />Cancelled Trips
                </li>
              </ul>
            </li>
            <li id="mb">
              <NavLink to="/ManageBks" style={{ textDecoration: "none", color: "white"}} >
                Manage Bookings
              </NavLink>
            </li>
            <li id="userImg">
              <img src={userImg} title="User Login" alt="User Login" />
              <ul>
                <li>Login</li>
                <li>New User?</li>
              </ul>
              <img src={downArrow} id="ddarrow" alt="Down Arrow" />
             
            </li>
          </ul>
         
        </div>
    
      </div>
      <div style={{color:"white",textAlign:"center",position:"relative",top:"-190px"}}><h3>Click On LessGo Icon</h3><br></br><span><h6 style={{position:"relative",top:"-30px"}}>And Explore The Portal</h6></span></div>
</div>
      <Routes>
        <Route path="ManageBks" element={<ManageBkgs/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
