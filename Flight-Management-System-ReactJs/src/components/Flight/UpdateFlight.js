import axios from "axios";
 
import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function UpdateFlight() {
  
  const URL = "http://localhost:7576/flight/updateFlight";
  const navigate = useNavigate();

  useEffect(() => {
    getFlightById();
  }, []);
  const [flight, setFlight] = useState({
    flightNo: "",
    carrierName: "",
    flightModel: "",
    seatCapacity: "",
  });

  const { flightNo,carrierName, flightModel,seatCapacity} =
  flight;
  const onInputChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
    updateDataToServer(flight);
  };
  const updateDataToServer = (data) => {
    axios.put(URL, data).then(
      (response) => {
        alert("Flight Updated Successfully");
        navigate("/FlightComponent");
      },
      (error) => {
        alert("Operation failed");
      }
    );
  };

  const getFlightById = async (e) => {
    const flightInfo = await axios.get(URL);
    setFlight(flightInfo.data);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Update Flight!</h1>
            <div>
            <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Flight No.</label>
                  <input
                    
                    className="form-control"
                    name="flightNo"
                    placeholder="Enter Flight No. "
                    
                    value={flightNo}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Carrier Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="carrierName"
                    placeholder="Enter Carrier Name"
                   
                    value={carrierName}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Flight Model</label>
                  <input
                    
                    className="form-control"
                    name="flightModel"
                    placeholder="Enter Flight Model"
                    required
                    value={flightModel}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Seat Capacity</label>
                  <input
                    
                    className="form-control"
                    name="seatCapacity"
                    placeholder="Enter Seat Capacity"
                    required
                    value={seatCapacity}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    className="btn text-center mr-2"
                  >
                    Update Flight
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
export default UpdateFlight;