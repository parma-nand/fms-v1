import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function navbar2() {
  return (
    <>
   
      <ul class="nav justify-content-end" style={{background:"black",textDecorationColor:"white",opacity:"90%" }}>
  <li class="nav-item">
    <div className='Flight'>
    <a class="nav-link active"  href="/HomeUser">Flight Management System</a>
    </div>
  </li>
  
  <li class="nav-item">
    <a class="nav-link" href="/Booking">Booking</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.flightsafety.com/">Flight Safety</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.google.com/search?q=todays+weather&rlz=1C1UEAD_enIN959IN959&oq=todays+weather&aqs=chrome..69i57j0i402l2j0i512j0i10i512l2j0i512l2j0i10i512j0i512.10824j1j7&sourceid=chrome&ie=UTF-8">Weather</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/LoginHome">Logout</a>
  </li>
 
  
</ul>

      
    </>
  );
}

export default navbar2;