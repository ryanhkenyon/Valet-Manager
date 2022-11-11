// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import Register from './components/Register';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Locations from './components/Locations';
import Location from './components/Location';
import AddLocation from './components/AddLocation';
import Valets  from './components/Valets';
import Valet  from './components/Valet';
import AddValet from './components/AddValet';

import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navigation/>
      <span className="navFix"></span>
      <header className="App-header">
        
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/view/location" element={<Location/>}/>
        <Route path="/add/location" element={<AddLocation/>}/>
        <Route path="/valets" element={<Valets />}/>
        <Route path="/view/valet" element={<Valet />}/>
        <Route path="/add/valet" element={<AddValet />}/>
        </Routes>
        
        
      </header>
      <Footer/>
    </div>
  );
}

export default App;
