import logo from './logo.svg';
import './App.css';
import LoginHome from './components/Login/LoginHome';
import Failure from './components/Failure/failure';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import App1 from './components/Screens/App1';
import App2 from './components/Screens/App2';
import UpdateUser from './components/Users/UpdateUser';
import UserComponent from './components/Users/UserComponent';
import CreateUserComponent from './components/Users/CreateUserComponent';
import CreateAirportComponent from './components/Airport/CreateAirportComponent'
import AirportComponent from './components/Airport/AirportComponent'
import UpdateAirport from './components/Airport/UpdateAirport'
import CreateFlightComponent from './components/Flight/CreateFlightComponent'
import FlightComponent from './components/Flight/FlightComponent';
import UpdateFlight from './components/Flight/UpdateFlight'
import CreateScheduleComponent from './components/Schedule/CreateScheduleComponent';



//import LoginUser from './components/Login/LoginUser';
function App() {
  return (
    <div className="App">
    
    
    <BrowserRouter>
    <Routes>
    

          <Route path="/" exact element={<LoginHome/>}></Route>
          <Route path="/HomeAdmin" exact element={<App1/>}></Route>
          <Route path="/HomeUser" exact element={<App2/>}></Route>
          <Route path="/Home" exact element={<App2/>}></Route>
          <Route path="/LoginHome" exact element={<LoginHome/>}></Route>
          <Route path="/Failure" element={<Failure/>}></Route>
          <Route path="/Footer" element={<Footer/>}></Route>
          <Route path="/User" exact element={<CreateUserComponent />}></Route>
          <Route path="/UserComponent" exact element={<UserComponent />}></Route>
          <Route path="/updateUser" exact element={<UpdateUser />}></Route>
          <Route path="/Airport" exact element={<CreateAirportComponent />}></Route>
          <Route path="/AirportComponent" exact element={<AirportComponent />}></Route>
          <Route path="/update-airport/:id" exact element={<UpdateAirport />}></Route>
          <Route path="/Flight" exact element={<CreateFlightComponent />}></Route>
          <Route path="/FlightComponent" exact element={<FlightComponent />}></Route>
          <Route path="/update-flight/:id" exact element={<UpdateFlight />}></Route>
          <Route path="/Schedule" exact element={<CreateScheduleComponent />}></Route>
          
          
          </Routes>
          
    </BrowserRouter>
    <Footer/>
    
    
    
    </div>
  );
}

export default App;
