import React, { Component } from "react";
import { Link } from "react-router-dom";
import AirportServices from "./AirportService";
import axios from "axios";
import Button from 'react-bootstrap/Button';


import Navbar from "../Navbar/Navbar";

class AirportComponent extends Component {
  // Step 1:
  constructor(props) {
    super(props);
    this.state = {
      airport: [],
    };
  }
  //Step 2:
  componentDidMount() {
    AirportServices.viewAllUsers().then((Response) => {
      this.setState({ airport: Response.data });
    });
  }
  deleteUser = (id) => {
    axios
      .delete(`http://localhost:7576/airport/deleteAirport/${id}`)
      .then(
        (response) => {
          alert("Record Deleted Successfully");
          this.setState({
            airport: this.state.airport.filter(
              (airport) => airport.airportName !== id
            ),
          });
        },
        (error) => {
          alert("Operation Failed Here");
        }
      );
  };
  /*
    private String airportName;
	
	private String airportLocation;
	
	private String airportCode;
 */ //<Button variant="primary">Primary</Button>
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="addbutton">
            <button id="addbtn" className="btn" type="button">
              <Link id="addbtn" to={"/Airport"}>
                Add Airport
              </Link>
            </button>
          
          </div>
          {this.state.airport.length === 0
            ? "No Record "
            : 
          <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Airport Name</th>
                            <th>Airport Location</th>
                            <th>Airport Code</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.airport.map(
                                    (airport, index)=>(
                                    <tr key={airport.id}>
                                        <td>{airport.airportName}</td>
                                        <td>{airport.airportLocation}</td>
                                        <td>{airport.airportCode}</td>
                                        <td><button 
                        id="addbtn" className="btn" type="button">
                          <Link
                            id="addbtn"
                            to={`/update-airport/${airport.airportName}`}
                          >
                            Update
                          </Link>{" "}
                        </button></td>
                                        <td><Button 
                        id="addbtn"
                        className="btn"
                        onClick={() => {
                          this.deleteUser(airport.airportName);}}
                        variant="danger">Delete</Button>{' '}</td>
                                        
                                    </tr>
                                )
                           ) }
                        </tbody>
                    </table>
          
        
                
              }
        </div>
      </div>
    );
  }
}

export default AirportComponent;