import React, { Component } from 'react'
import axios from 'axios';


class AirportServices extends Component {
    
    viewAllUsers(){
        return axios.get(`http://localhost:7576/airport/allAirport`);
    }
    
    viewUser = (id)=>{
        return axios.get(`http://localhost:7576/airport/viewAirport/${id}`)
    }
}
export default new AirportServices;