import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
 
function CreateAirportComponent() {
  const navigate = useNavigate();
  const [airport, setAirport] = useState({
    /*private String airportName;
	
	private String airportLocation;
	
	private String airportCode;
 */
    airportName: "",
    airportLocation: "",
    airportCode: "",
   
  });
  const onInputChange = (e) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };
  const { airportName,airportLocation, airportCode} =
  airport;
 
  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(airport);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:7576/airport/addAirport", data).then(
      (response) => {
        console.log(response);
        alert("Airport Added Successfully");
        navigate("/AirportComponent");
      },
      (error) => {
        console.log(error);
        alert("Operation failed");
      }
    );
  };
  return (
    <div data-testid="create-1">
       <Navbar/>
      <div className="container" >
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Add Airport!</h1>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Airport Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="airportName"
                    placeholder="Enter Airport Name "
                    
                    value={airportName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Airport Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="airportLocation"
                    placeholder="Enter Airport Location"
                   
                    value={airportLocation}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Airport Code</label>
                  <input
                    
                    className="form-control"
                    name="airportCode"
                    placeholder="Enter Airport Code"
                    required
                    value={airportCode}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    className="btn text-center mr-2"
                  >
                    Add Airport
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAirportComponent;