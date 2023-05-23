import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlightServices from "./FlightService";
import axios from "axios";
import Button from 'react-bootstrap/Button';


import Navbar from "../Navbar/Navbar";

class FlightComponent extends Component {
  // Step 1:
  constructor(props) {
    super(props);
    this.state = {
      flight: [],
    };
  }
  //Step 2:
  componentDidMount() {
    FlightServices.viewAllUsers().then((Response) => {
      this.setState({ flight: Response.data });
    });
  }
  deleteUser = (id) => {
    axios
      .delete(`http://localhost:7576/flight/deleteFlight/${id}`)
      .then(
        (response) => {
          alert("Record Deleted Successfully");
          this.setState({
            flight: this.state.flight.filter(
              (flight) => flight.flightNo !== id
            ),
          });
        },
        (error) => {
          alert("Operation Failed Here");
        }
      );
  };
  
    /*
    "flightNo": "114",
	"carrierName": "Indigo",
	"flightModel": "Ind",
	"seatCapacity": "300"

 */
 //<Button variant="primary">Primary</Button>
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="addbutton">
            <button id="addbtn" className="btn" type="button">
              <Link id="addbtn" to={"/Flight"}>
                Add Flight
              </Link>
            </button>
          
          </div>
          {this.state.flight.length === 0
            ? "No Record "
            : this.state.flight.map((flight, index) => (
                <div className="card " key={flight.id}>
                  <div class="jumbotron">
                    <div className="card-body" style={{ color: "black" }}>
                      <h5 className="card-title">{flight.flightNo}</h5>
                      <h5 className="card-text">
                      Flight No. &nbsp; :&nbsp; {flight.flightNo}
                      </h5>
                      <h5 className="card-text">
                      Carrier Name  &nbsp; : &nbsp; {flight.carrierName}
                      </h5>
                     
                      <h5 className="card-text">
                      Flight Model &nbsp; : &nbsp;{flight.flightModel}
                      </h5>
                      <h5 className="card-text">
                      Seat Capacity &nbsp; : &nbsp;{flight.seatCapacity}
                      </h5>
                      
                      <div className="gap-2">
                        <button 
                        id="addbtn" className="btn" type="button">
                          <Link
                            id="addbtn"
                            to={`/update-flight/${flight.flightNo}`}
                          >
                            Update
                          </Link>{" "}
                        </button>
                        
                        <Button 
                        id="addbtn"
                        className="btn"
                        onClick={() => {
                          this.deleteUser(flight.flightNo);}}
                        variant="danger">Delete</Button>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default FlightComponent;