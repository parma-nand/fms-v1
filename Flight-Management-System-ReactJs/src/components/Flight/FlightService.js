import React, { Component } from 'react'
import axios from 'axios';


class FlightServices extends Component {
    
    viewAllUsers(){
        return axios.get(`http://localhost:7576/flight/allFlight`);
    }
    
    viewUser = (id)=>{
        return axios.get(`http://localhost:7576/flight/viewFlight/${id}`)
    }
}
export default new FlightServices;