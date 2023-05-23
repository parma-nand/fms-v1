import React, { Component } from 'react'
import axios from 'axios';


class UserServices extends Component {
    
    viewAllUsers(){
        return axios.get(`http://localhost:7576/user/displayAllUser`);
    }
    
    viewUser = (id)=>{
        return axios.get(`http://localhost:7576/user/searchUser/${id}`)
    }
}
export default new UserServices;