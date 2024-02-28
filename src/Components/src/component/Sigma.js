import contact from "./contact.png";
import date from "./date.png";
import location from "./location.png";
import name from "./name.jpg";
import time from "./time.png";
import service from "./service.png";
import React from "react";

export default class Sigma extends React.Component {
  constructor() {
    super();
    this.state = {
      enquireDetails: [],
      viewDetails: false,
    };
  }
  addEnquiry = (event) => {
    event.preventDefault();
   const name=document.getElementById("name").value.trim();
   if(name==""){
    event.preventDefault();
    alert("Please Fill The Name");
    return;
   }
   const date=document.getElementById("date").value.trim();
if(date==""){
  event.preventDefault();
  alert("Please Ener The Date That You Are Going TO visit");
  return
}
const contact=document.getElementById("mobile").value.trim();
if(!/\d+$/.test(contact)){
  event.preventDefault();
  alert("Contact should Only Contain Number");
  return;
}

    const objDetails = {
      name: document.getElementById("name").value,
      time: document.getElementById("time").value,
      branch: document.getElementById("branch").value,
      date: document.getElementById("date").value,
      mobile: document.getElementById("mobile").value,
      service: document.getElementById("service").value,
    };
    this.setState({
      enquireDetails: [objDetails],
      viewDetails: true,
    });
  };
  viewwDetails = () => {
    this.setState({
      viewDetails: false,
    });
  };
  render() {
    return (
      <div>
     
        <div className="container">
          <div id="ccontainer">
            <h1 id="topic">Book Your Turn</h1>
            <form onSubmit={this.addEnquiry.bind(this)}>
              <div className="margin" id="f1">
                <img src={name} ></img>
                <input
                  type="text"
                  id="name"
                  className="insert"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="margin" id="f2">
              <img src={date} />
                <input type="date" id="date" className="insert" />
              </div>
              <div className="margin" id="f3">
                <img src={time}/>
                <input type="time" id="time" className="insert" />
              </div>
              <div className="margin" id="f4">
                <img src={location}/>
                <select id="branch" className="insert">
                  <option value={"Annanagar"}>Annanagar</option>
                  <option value={"Perambur"}>Perambur</option>
                  <option value={"porur"}>Porur</option>
                  <option value={"Nungambakkam"}>NungambakamWest</option>
                  <option value={"T.Nagar"}>T.Nagar</option>
                </select>
              </div>
              <div className="margin" id="f5">
            <img src={service}/>
                <select id="service" className="insert" >
                  <option value={"For Haircut :189Rs/-"}>Haircut</option>
                  <option value={"For Facial :699Rs/-"}>Men Facial</option>
                  <option value={"For Massauge : 300Rs/-"}>Massauge</option>
                  <option value={"For Body Massauge :1200Rs/-"}>
                    Full Body Massauge
                  </option>
                  <option value={"Haircut+shaving : 219Rs/-"}/>
                </select>
              </div>
              <div className="margin" id="f6">
            <img src={contact}/>
                <input type="text" id="mobile" className="insert"  placeholder="Enter Mobile Number"/>
              </div>
              <div  >
                <button type="submit" id="Btn">Submit</button>
              </div>Please Make Sure That, Every Data Has been Filled And Please Check Your Details And Make the Payment For Undisturbed Fast Services.
            </form>
          </div>
          {this.state.viewDetails ? (
            <>
              <div className="booked">
                <div>SuccessFully Booked Your Slot !!</div>
                
                  <button
                    onClick={this.viewwDetails.bind(this)}
                    className="bbooked"
                  >
                    Show Details
                  </button>
                  <div>
                </div>
              </div>
            </>
          ) : (
            <>
            
              {this.state.enquireDetails.length > 0 ? (
                <div className="Dcontainer">
                  <h1 id="Up">Verify Your Details</h1>
                  <table className="table">
                    <tr>
                      <th className="ttable">Name</th>
                      <th className="ttable">Visiting Date</th>
                      <th className="ttable">Time</th>
                      <th className="ttable">Branch Location</th>
                      <th className="ttable">Mobile Number</th>
                    </tr>
                    <tbody>
                      {this.state.enquireDetails.map((std) => {
                        return (
                          <tr>
                            <td className="ttable">{std.name}</td>
                            <td className="ttable">{std.date}</td>
                            <td className="ttable">{std.time}</td>
                            <td className="ttable">{std.branch}</td>
                            <td className="ttable">{std.mobile}</td>
                          </tr>
                        );
                      })}
                      {this.state.enquireDetails.map((std) => {
                        return (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="tttable">Amount Costs</td>
                            <td className="tttable">{std.service}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <button id="payNow"><a href="https://pay.google.com/about/" style={{textDecoration:"none",color:"white"} }target="_blank">PayNow..</a></button>
                </div>
              ) : (
                <></>
              )}
            </> 
          )}
        </div>
      </div>
    );
  }
}
