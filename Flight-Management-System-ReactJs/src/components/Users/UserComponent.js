import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserServices from "./UserService";
import axios from "axios";
import Button from 'react-bootstrap/Button';


import Navbar from "../Navbar/Navbar";

class UserComponent extends Component {
  // Step 1:
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  //Step 2:
  componentDidMount() {
    UserServices.viewAllUsers().then((Response) => {
      this.setState({ user: Response.data });
    });
  }
  deleteUser = (id) => {
    axios
      .delete(`http://localhost:7576/user/deleteUser/${id}`)
      .then(
        (response) => {
          alert("Record Deleted Successfully");
          this.setState({
            user: this.state.user.filter(
              (user) => user.userId !== id
            ),
          });
        },
        (error) => {
          alert("Operation Failed Here");
        }
      );
  };
  
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="addbutton">
            <button id="addbtn" className="btn" type="button">
              <Link id="addbtn" to={"/User"}>
                Create User
              </Link>
            </button>
          
          </div>
          
  
          {this.state.user.length === 0
            ? "No Record "
            : 
              
              
<table className="table table-striped table-bordered">
  <thead>
    <tr >
      <th scope="col">Serial No.</th>
      <th scope="col">Id</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Password</th>
      <th scope="col">Role</th>
      <th scope="col">User Type</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
    <tbody>{this.state.user.map((user, index) => (
      <tr class="table"key={user.id}>
         <th scope="row">{index+1}</th>
         <td>&nbsp; {user.userId}</td>
         <td>&nbsp;{user.username}</td>
         <td>&nbsp;{user.email}</td>
         <td>&nbsp;{user.userPhone}</td>
         <td>&nbsp;{user.password}</td>
         <td>&nbsp;{user.role}</td>
         <td>&nbsp;{user.userType}</td>
         <td>&nbsp;
            <button  id="addbtn" className="btn" type="button">
                     <Link id="addbtn"to={`/updateUser`}>Update</Link>{" "}
            </button>
         </td>
         <td>&nbsp;
            <Button id="addbtn"className="btn" onClick={() => {
                         this.deleteUser(user.userId);}}variant="danger">Delete
            </Button>{' '}
         </td>
    </tr>
   ))}
  </tbody>
</table>  }
        </div>
      </div>
    );
  }
}

export default UserComponent;