import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function CreateScheduleComponent() {
  const navigate = useNavigate();
  //const[date,setDate]=useState();
  
  const [airport, setSrcAirport] = useState({
    /*private String airportName;
	
	private String airportLocation;
	
	private String airportCode;
 */
    airportName: "",
    airportLocation: "",
    airportCode: "",
   
  });
  const onInputChange = (e) => {
    setSrcAirport({ ...airport, [e.target.name]: e.target.value });
  };
  const { airportName,airportLocation, airportCode,arrDate,depDate} =
  airport;
 
  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(airport);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:7576/schedule/addSchedule", data).then(
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
            <h1 className="display-4 text-center">Add Schedule!</h1>
            <div>
                <div>
                    <label>Schedule Id</label>
                    <input></input>
                </div>
              <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Airport Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="airportName1"
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
                    name="airportLocation1"
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
                  
                </div>
              </form>
              <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Airport Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="airportName1"
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
                    name="airportLocation1"
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
                
                
              </form>
              <div>
                <h3 >Arr Date</h3>
                <div className='container'>
      <input type="date" value={arrDate} onChange={e=>onInputChange(e)}/>
      <h3 >Dep Date</h3>
      <input type="date" value={depDate} onChange={e=>onInputChange(e)}/>
    </div>
    <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    className="btn text-center mr-2"
                  >
                    Add Schedule
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateScheduleComponent;