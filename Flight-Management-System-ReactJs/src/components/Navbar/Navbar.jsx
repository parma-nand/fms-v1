import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
  return (
    <>
   
      <ul class="nav justify-content-end" style={{background:"black",textDecorationColor:"white",opacity:"90%" }}>
  <li class="nav-item">
    <a class="nav-link active" href="/HomeAdmin">Flight Management System</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/HomeAdmin">Home</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href="/UserComponent">User</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/FlightComponent">Flight</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/AirportComponent">Airport</a>
  </li>
 
  <li class="nav-item">
    <a class="nav-link" href="/Schedule">Schedule</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/#">Schedule-Flight</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="LoginHome">Logout</a>
  </li>
</ul>

      
    </>
  );
}

export default navbar;