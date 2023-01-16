// import logo from './logo.svg';
import "./App.css";
import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Register from "./components/Register";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Locations from "./components/Locations";
import Location from "./components/Location";
import AddLocation from "./components/AddLocation";
import Valets from "./components/Valets";
import Valet from "./components/Valet";
import AddValet from "./components/AddValet";

import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [userId, setUserId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
  const [loggedIn, setLoggedIn] = useState(
    cookies["x-auth-token"] ? true : false
  );
  return (
    <div className="App">
      <Navigation
        loggedIn={loggedIn}
        removeCookie={removeCookie}
        setLoggedIn={setLoggedIn}
        setUserId={setUserId}
      />
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register loggedIn={loggedIn} />} />
          <Route
            path="/login"
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setCookie={setCookie}
                setUserId={setUserId}
              />
            }
          />
          <Route path="/logout" element={<Logout loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
          <Route
            path="/locations"
            element={<Locations loggedIn={loggedIn} userId={userId}/>}
          />
          <Route
            path="/view/location"
            element={<Location loggedIn={loggedIn}  cookie={cookies["x-auth-token"]} userId={userId}/>}
          />
          <Route
            path="/add/location"
            element={<AddLocation loggedIn={loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />}
          />
          <Route path="/valets" element={<Valets loggedIn={loggedIn} userId={userId} />} />
          <Route path="/view/valet" element={<Valet loggedIn={loggedIn} cookie={cookies["x-auth-token"]} userId={userId} />} />
          <Route
            path="/add/valet"
            element={<AddValet loggedIn={loggedIn}  cookie={cookies["x-auth-token"]} userId={userId} />}
          />
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
