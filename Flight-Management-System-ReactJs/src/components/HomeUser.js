import React from "react";
import './Home.css';
import plane from './plane.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomeUser() {
  return <div className="Homebody"
  >
    <div className="Banner1"
    
    >
        
    </div>
    <div className="Banner2">
      <h2>Ticket Booking System..</h2>
      <p>Book your ticket</p>

    </div>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">International Flight</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Book International Flight</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Local Flight</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Book Local Flight</a>
      </div>
    </div>
  </div>
  
</div>
<div className="SocialMedia">

</div>
  </div>
}
