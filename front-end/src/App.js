// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Register from './components/Register';
import About from './components/About';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Locations from './components/Locations';
import AddLocation from './components/AddLocation';
import Valets  from './components/Valets';
import AddValet from './components/AddValet';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/add/location" element={<AddLocation/>}/>
        <Route path="/valets" element={<Valets />}/>
        <Route path="/add/valet" element={<AddValet />}/>
        </Routes>
        
        
      </header>
    </div>
  );
}

export default App;
