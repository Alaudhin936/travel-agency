import React from "react";
import Sigma from "./component/Sigma";
import "./component/route.css";
import Home from "./component/home";
import { Route,Routes,BrowserRouter,Link } from "react-router-dom";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <ul> <li><Link to="/"><a href="#">🏠Home</a></Link></li>
            <li><a href="#">About</a></li>
            <li class="dropdown">
                <a href="#">💇Services</a>
                <div id="dropdowncontent">
                    <a href="#">Haircut</a>
                    <a href="#">Facial</a>
                    <a href="#">Massage</a>
                    <a href="#">Shaving</a>
                    <a href="#">Straightening</a>
                    <a href="#">Smoothening</a>
                    <a href="#">Eyebrow</a>
                </div>
            </li>
            <li><a href="#">📍Locations</a></li>
            <li><Link to="/book"><a href="#">Book Your Slot</a></Link></li>
            <li><a href="#">📞Contact Us</a></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="book" element={<Sigma/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}