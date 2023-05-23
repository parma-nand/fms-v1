//import Home from "../Home";
import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import HomeUser from "../HomeUser";


function App2() {
  return (
    <div>
      <Navbar2/>
      <div className="imgfront">

      {/* <img src="https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/basic-information-about-plants.jpg" /> */}
      {/* <img src="https://cdn-cms.pgimgs.com/static/2019/05/backyard-garden-main-image.jpg " /> */}
      <img src="https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_960_720.jpg" alt=""/>     </div>
      <HomeUser/>
    </div>
  );
}

export default App2;