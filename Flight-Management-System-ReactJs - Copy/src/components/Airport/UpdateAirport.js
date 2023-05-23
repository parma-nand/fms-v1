
import axios from "axios";
 
import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function UpdateAirport() {
  
  const URL = "http://localhost:7576/airport/updateAirport";
  const navigate = useNavigate();

  useEffect(() => {
    getAirportById();
  }, []);
  const [airport, setAirport] = useState({
    airportName: "",
    airportLocation: "",
    airportCode: "",
  });

  const { airportName,airportLocation, airportCode} =
  airport;
  const onInputChange = (e) => {
    setAirport({ ...airport, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
    updateDataToServer(airport);
  };
  const updateDataToServer = (data) => {
    axios.put(URL, data).then(
      (response) => {
        alert("Airtport Updated Successfully");
        navigate("/AirportComponent");
      },
      (error) => {
        alert("Operation failed");
      }
    );
  };

  const getAirportById = async (e) => {
    const airportInfo = await axios.get(URL);
    setAirport(airportInfo.data);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Update User!</h1>
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
                    placeholder="Enter user Password"
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
                    Update Airport
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
export default UpdateAirport;