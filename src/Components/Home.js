import calendar from "./Booking Images/calendar.png";
import "./Home.css";
import charging from "./Booking Images/charging.webp";
import Sanitizer from "./Booking Images/Sanitizer.avif";
import cctv from "./Booking Images/CCTV.jpg";
import BreathAnalyser from "./Booking Images/BreathAnalyser.jpg";
import tyre from "./Booking Images/tyre.jpg";
import Shield from "./Booking Images/shield.png";
import Hydrabad from "./Booking Images/Hydrabad.jpg";
import Chennai from "./Booking Images/Chennai.jpg";
import Banglore from "./Booking Images/Bengaluru.jpg";
import Trichy from "./Booking Images/Trichy.jpg";
import Delhi from "./Booking Images/Delhi.jpg";
import Places from "./Booking Images/Places.png";
import group from "./Booking Images/group.png";
import Location from "./Booking Images/location.png";
import rote from "./Booking Images/two-arrow.png";
import departure from "./Booking Images/departure.png";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { hydrate } from "react-dom";
import { useAsyncError } from "react-router";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
export default function Home() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
    height: "400px",
    width: "900px",
  };
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzfGVufDB8fDB8fHww",
    },
    {
      url: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 3",
    },
  ];
  const [passDet, Setpassdet] = useState([]);
  const [state, setState] = useState({ count: 1, perso: "Tickets" });
  const count = state.count;
  const perso = state.perso;
  function addPersons() {
    setState((prevState) => {
      return { ...prevState, count: count + 1 };
    });
  }
  function addPassdet() {
    let stdObj = {
      from: document.getElementById("loo").value,
      to: document.getElementById("looo").value,
      datee: document.getElementById("myDate").value,
    };
    Setpassdet((prevState) => {
      return [stdObj];
    });
  }
  function subPersons() {
    if (count > 1) {
      setState((prevState) => {
        return {
          ...prevState,
          count: count - 1,
        };
      });
    }
  }

  return (
    <div id="homee">
      <div style={{ color: "white", margin: "-110px" }}></div>
      <div id="slide">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage) => (
              <div>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div id="bookingContainer" style={{ position: "sticky" }}>
        <div id="departure">
          <img src={departure} />
          <select id="loo">
            <option value={"chennai"} price={1999} className="lo">
              Chennai
            </option>
            <option value={"Madurai"} className="lo">
              Madurai
            </option>
            <option value={"Selam"} className="lo">
              Selam
            </option>
            <option value={"Banglore"} className="lo">
              Banglore
            </option>
            <option value={"trichy"} className="lo">
              Trichy
            </option>
            <option value={"Hydrabad"} className="lo">
              Hydrabad
            </option>
            <option value={"Pune"} className="lo">
              Pune
            </option>
            <option value={"Indore"} className="lo">
              Indore
            </option>
          </select>
          <option value={""} />
          <img src={rote} />
        </div>
        <div id="destination">
          <img src={Location} />
          <select id="looo">
            <option value={"Banglore"}>Banglore</option>
            <option value={"chennai"}>Chennai</option>
            <option value={"Madurai"}>Madurai</option>
            <option value={"Selam"}>Selam</option>
            <option value={"Banglore"}>Banglore</option>
            <option value={"trichy"}>Trichy</option>
            <option value={"Hydrabad"}>Hydrabad</option>
            <option value={"Pune"}>Pune</option>
            <option value={"Indore"}>Indore</option>
          </select>
        </div>
        <div id="day">
          <img src={calendar} />
          <input type="date" id="myDate" />
          <h6>
            <span>Today</span>
          </h6>
          <h6>
            <span>Tomorrow</span>
          </h6>
        </div>
        <div id="persons">
          <img src={group} />
          <button onClick={subPersons}>-</button>
          <span> {count}</span>
          {perso}
          <button onClick={addPersons}>+</button>
        </div>
        <div id="searchBus">
          <button onClick={addPassdet}>Search Bus</button>
        </div>
      </div>
      {passDet.length > 0 ? (
        <>
          <h1 style={{ textAlign: "center" }}>Your Ticket</h1>
          {passDet.map((std) => {
            return (
              <div>
                <h3>
                  {std.from} to {std.to}With{count} Ticket
                </h3>
                <h3>Price : {std.from.pri}</h3>
                <h3>on {std.datee}</h3>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
      <div id="loc-bar" style={{ color: "whitesmoke" }}>
        <div id="loccs">
          <img src={Places} style={{ width: "30px" }}></img>
          <h4>
            OUR ROUTES<br></br>
            <h6
              style={{
                position: "relative",
                left: "-7px",
                fontSize: "xx-small",
              }}
            >
              Explore Our New Routes Launched In 2023
            </h6>
          </h4>
        </div>
        <div id="locations">
          <div id="delhi">
            <img src={Delhi} />
            <div style={{ fontSize: "large" }}>Delhi</div>
          </div>
          <div id="chennai">
            <img src={Chennai} />
            <div>Chennai</div>
          </div>
          <div id="banglore">
            <img src={Banglore} />
            <div>Bengaluru</div>
          </div>
          <div id="trichy" style={{ position: "relative", top: "30px" }}>
            <img src={Trichy} />
            <div>Trichy</div>
          </div>
          <div id="hydrabad" style={{ position: "relative", top: "30px" }}>
            <img src={Hydrabad} />
            <div>Hydrabad</div>
          </div>
        </div>
      </div>

      <div id="main-safety">
        <div
          id="safety"
          style={{ color: "white", boxShadow: "0 0 10px rgb(53, 52, 52)" }}
        >
          <img src={Shield} style={{ width: "29px" }} />
          <h4> LessGo Safety! </h4>
        </div>
        <div id="safetyBorder" style={{ color: "whitesmoke" }}>
          <div id="safetyGo">
            <div id="safetyGoImg">
              <img src={Shield} />
              <br></br>LessGo Safety
            </div>
            <div id="bA">
              <img
                src={BreathAnalyser}
                style={{
                  borderRadius: "100px",
                  width: "130px",
                  height: "22vh",
                }}
              />
              <br></br> <br></br>Breath Analyzer
            </div>
            <div id="cctv">
              <img src={cctv} />
              <br></br> <br></br>CCTV Serveillence
            </div>
            <div id="sanitizer">
              <img src={Sanitizer} />
              <br></br>
              <br></br>Regularly Santized
            </div>
            <div id="charging">
              <img src={charging} />
              <br></br>
              <br></br>Mobile Charging <br></br>Facilities
            </div>
            <div id="tyre">
              <img src={tyre} />
              <br></br>
              <br></br>Tyre Pressure<br></br>Monitoring System
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
