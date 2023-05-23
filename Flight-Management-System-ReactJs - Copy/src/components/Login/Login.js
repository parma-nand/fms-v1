import React, { useState } from 'react';

import {Link,useNavigate} from 'react-router-dom';
import Failure from '../Failure/failure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Admin.css'




function Login() {
  const [unameval, setunameval] = useState("");
  const [passval, setpassval] = useState("");
  const navigate = useNavigate();
  const [defaultuser, setUser] = useState("Admin");
  const [defaultpwd, setPwd] = useState("Admin@123");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("Login Successful");
      navigate("/HomeAdmin");
    } else {
    
      navigate("/Failure");
      console.log("Something went wrong");

    }
  }
  function checkIfUserIsValid() {
    const requestBody = {
      username: unameval,
      password: passval,
    };

    if (unameval === defaultuser && passval === defaultpwd) return true;
    else return false;
  }
  return (
    <div  className="main">
      
      <div className="contain">
  
        <div className="left1">
       
          <div className='welcomenote1'>
            <h3 className='admin'>Admin</h3>
          
          
        </div>
          
          <Card style={{ width: '16rem',marginLeft:'528px',backgroundColor:"", opacity:'80%' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/11/02/10/41/plane-513641_960_720.jpg" />
      <Card.Body>
        <Card.Title>Admin Login</Card.Title>
        <Card.Text>
        <form >
            <label for="uname" >Admin </label>
            <input placeholder="Enter your username" type="username" value={unameval} onChange={(e)=>{setunameval(e.target.value)}} id="uname1" required/>
            <label for="pwd">Password</label>
            <input placeholder="Enter Password" type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pwd1" required/>
            
            <button type="button" onClick={login} class="btn btn-primary" style={{marginTop:'5px',}}>Login</button>
            <div className='footer11'></div>
          </form>
        </Card.Text>

      </Card.Body>
    </Card>
          
        </div>
        
          <div className='welcomenote1'>
            <h3 ></h3>
          
          
        </div>
      </div>
      
    
      </div>
        
  )

}

export default Login;