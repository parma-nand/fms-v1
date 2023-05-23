import React from "react";
import LoginUser from "./LoginUser";
import Login from './Login';
import './Login.css';
import plane3 from './plane3.jpg'
import './Header.css'

function LoginHome(){
    return(
        <div className="loginstyle" style={{backgrounimage:"plane3"}} >
             <div className="header">
             <h1>Flight Management System</h1>
             </div>
             <div className="container">
            <Login/>
            <LoginUser/>
            </div>
            
            
        </div>
        
    )
}
export default LoginHome;