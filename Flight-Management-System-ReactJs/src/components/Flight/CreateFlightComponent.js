import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
 
function CreateFlightComponent() {
  const navigate = useNavigate();
  const [flight, setFlight] = useState({
    /*
    "flightNo": "114",
	"carrierName": "Indigo",
	"flightModel": "Ind",
	"seatCapacity": "300"

 */
    flightNo: "",
    carrierName: "",
    flightModel: "",
    seatCapacity: "",
   
  });
  const onInputChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };
  const { flightNo,carrierName, flightModel,seatCapacity} =
  flight;
 
  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(flight);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:7576/flight/addFlight", data).then(
      (response) => {
        console.log(response);
        alert("Flight Added Successfully");
        navigate("/FlightComponent");
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
            <h1 className="display-4 text-center">Add Flight!</h1>
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
                    Add Flight
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
export default CreateFlightComponent;