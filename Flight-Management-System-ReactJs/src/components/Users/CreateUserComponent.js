import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
 
import Navbar from "../Navbar/Navbar";
 
function CreateUserComponent() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    userId: "",
    username: "",
    email: "",
    userPhone: "",
    password: "",
    role:"",
    userType:""
  });
  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const { userId,password, username, email, userPhone ,role,userType} =
    user;
 
  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(user);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:7576/user/createUser", data).then(
      (response) => {
        console.log(response);
        alert("user Added Successfully");
        navigate("/UserComponent");
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
            <h1 className="display-4 text-center">Add user!</h1>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
                <div className="form-group">
                  <label for="exampleInputEmail1">user Id</label>
                  <input
                    type='number'
                    className="form-control"
                    name="userId"
                    placeholder="Enter user Id"
                    
                    value={userId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">user Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter user Name"
                   
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">user Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter user Password"
                    required
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">user userPhone</label>
                  <input
                   
                    className="form-control"
                    name="userPhone"
                    placeholder="Enter user userPhone"
                   
                    pattern="[6-9]{1}[0-9]{9}"
                    value={userPhone}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">user Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter user Email"
               
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
               
               
                <div className="form-group">
                  <label for="exampleInputPassword3">User Role</label>
                  <input
                    type="text"
                    className="form-control"
                    name="role"
                    placeholder="Enter User Role"
                    required
                    value={role}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">User Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userType"
                    placeholder="Enter User Type"
                    required
                    value={userType}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
               
 
                <div className="container text-center">
                  <button
                    id="addbtn"
                    type="submit"
                    className="btn text-center mr-2"
                  >
                    Add user
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
export default CreateUserComponent;