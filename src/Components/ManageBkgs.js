import "./ManageBkgs.css";
import React, { useRef } from "react";
import bus1 from "./Booking Images/Bus1.jpg";
import PNR from "./Booking Images/ticket.png";
import FirstName from "./Booking Images/id-card.png";
import Cancel from "./Booking Images/close.png";
import { useNavigate } from "react-router";

export default function ManageBkgs() {
  const navigate = useNavigate();
  const myTicketRef = useRef(null);
  const myNameRef = useRef(null);

  const chhecKIt = () => {
    const myTicket = myTicketRef.current;
    const myName = myNameRef.current;

    if (myTicket.value==""){
      alert("Please Fill The Valid Ticket Number");
      return;
    }
    if (myName.value=="") {
      alert("Please Fill The Matching Name");
      return;
    }
    if (/\d/.test(myName.value)) {
      alert("Name Should Only Contain Letters");
    }
    if (!/^\d+$/.test(myTicket.value)) {
      alert("Ticket Should only Contains Number");
    }
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div id="container" style={{ position: "relative",top:"-170px" }}>
        <div id="design" >
          <img src={bus1} alt="Bus" />
        </div>
        <div id="content">
          <div id="cancel">
            <img src={Cancel} onClick={navigateHome} alt="Cancel" />
          </div>
          <div id="textContent">
            <h2>Manage Bookings</h2>
            <br />
            <h5>
              Enter The Details Below And Please Help Us To retrieve The Ticket
              For You{" "}
            </h5>
          </div>
          <div className="merge">
            <img src={PNR} alt="PNR" />
            <input
              type="text"
              id="myTicket"
              ref={myTicketRef}
              placeholder="Enter Your Ticket Number"
            />
          </div>
          <div className="merge">
            <img src={FirstName} alt="FirstName" />
            <input
              type="text"
              id="myName"
              ref={myNameRef}
              placeholder="Enter Your firstName"
            />
          </div>
          <div id="footers">
            <button id="bookBtn" onClick={chhecKIt}>
              Get Booking
            </button>
            <div id="textcontent">
              <h6>
                Already have An Account?<a href="#">Sign Up</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
