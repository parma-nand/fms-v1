import React from "react";
import './Home.css';
import plane from './plane.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomeAdmin() {
  return <div className="Homebody"
  >
    <div className="Banner1"
    
    >
        <div className="imgfront">

      {/* <img src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/basic-information-about-plants.jpg" /> */}
      {/* <img src="https://cdn-cms.pgimgs.com/static/2019/05/backyard-garden-main-image.jpg " /> */}
      <img src="https://cdn.pixabay.com/photo/2020/05/24/23/37/airplane-5216583_960_720.jpg" alt=""/>     </div>
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

