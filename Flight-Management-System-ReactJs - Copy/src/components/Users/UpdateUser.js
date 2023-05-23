
import axios from "axios";
 
import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function UpdateUser() {
  const { id } = useParams();
  const URL = `http://localhost:7576/user/updateUser`;
  const navigate = useNavigate();

  useEffect(() => {
    getCustomerById();
  }, []);
  const [user, setUser] = useState({
    userId: "",
    username: "",
    email: "",
    userPhone: "",
    password: "",
    role:"",
    userType:""
  });

  const { userId,password, username, email, userPhone ,role,userType } =
  user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
    updateDataToServer(user);
  };
  const updateDataToServer = (data) => {
    axios.put(URL, data).then(
      (response) => {
        alert("User Updated Successfully");
        navigate("/UserComponent");
      },
      (error) => {
        alert("Operation failed");
      }
    );
  };

  const getCustomerById = async (e) => {
    const userInfo = await axios.get(URL);
    setUser(userInfo.data);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Update User</h1>
            <div>
              <form onSubmit={(e) => FormHandle(e)}>
              <div className="form-group">
                  <label for="exampleInputEmail1">user Id</label>
                  <input
                    type='text'
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
                   
                    pattern="[7-9]{1}[0-9]{9}"
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
                    Update user
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
export default UpdateUser;
