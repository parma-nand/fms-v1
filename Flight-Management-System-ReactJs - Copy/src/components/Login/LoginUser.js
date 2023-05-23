import React, { useState, useSyncExternalStore } from 'react';

import {Link,useNavigate} from 'react-router-dom';
import Failure from '../Failure/failure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';





function LoginUser() {
 /* const [unameval, setunameval] = useState("");
  const [passval, setpassval] = useState("");
  const navigate = useNavigate();
  const [defaultuser, setUser] = useState("Admin");
  const [defaultpwd, setPwd] = useState("Admin@123"); */

const[name,setname]=useState("");
const[pass,setpass]=useState("");
const navigate=useNavigate();
const[defuser,setdefuser]=useState("user");
const[defpass,setdefpass]=useState("1234");

  function login1() {
    let isLogged = checkIfUserIsValid1();
    if (isLogged) {
      console.log("Login Successful");
      navigate("/HomeUser");
    } else {
    
      navigate("/Failure");
      console.log("Something went wrong");

    }
  }

  function checkIfUserIsValid1() {
    const requestBody = {
      username: name,
      password: pass,
    };

    if (name === defuser && pass === defpass) return true;
    else return false;
  }
  return (
    <div  className="main-Login">
      
      <div className="login-contain">
  
        <div className="left">
    
          <div className='welcomenote'>
            <h3 style={{color:'Black'}}>USER</h3>
          
          
        </div>
          
          <Card style={{ width: '17rem',marginLeft:'525px' ,marginbottom:'25px' ,opacity:'80%' ,marginBottom : '2px'}}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/29/08/38/man-2692458_960_720.jpg" />
      <Card.Body>
        <Card.Title>User Login</Card.Title>
        <Card.Text>
        <form >
            <label for="uname">Username</label>
            <input placeholder="Enter your username" type="username" value={name} onChange={(e)=>{setname(e.target.value)}} id="uname2" required/>
            <label for="pwd">Password</label>
            <input placeholder="Enter Password" type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}} id="pwd2" required/>
            
            <button type="button" onClick={login1} class="btn btn-success" style={{marginTop:'5px',}}>Login</button>
            <div className='footer2'></div>
          </form>
        </Card.Text>

      </Card.Body>
    </Card>
          
        </div>
        
         
      </div>
      
    
      </div>
        
  )

}

export default LoginUser;