import { Link, Navigate, useNavigate } from "react-router-dom";

function Navigation(props) {
  const navigate = useNavigate();
  let loggedIn = props.loggedIn;
  let navItems = [];
  function clickHandler(event) {
    props.setLoggedIn(false);
    props.removeCookie("x-auth-token");
  }

  if (loggedIn) {
    navItems = [
      <div className="navLinks">
        <Link to="/locations" className="navLink">
          Locations
        </Link>
        <Link to="/valets" className="navLink">
          Valets
        </Link>
        <Link to="add/location" className="navLink">
          Add Location
        </Link>
        <Link to="add/valet" className="navLink">
          Add Valet
        </Link>
        <Link className="navLink" onClick={clickHandler} to="/">
          Logout
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
      </div>
    ];
  } else {
    navItems = [
      <div className="navLinks">
        <Link to="/register" className="navLink">
          Register
        </Link>
        <Link to="/login" className="navLink">
          Login
        </Link>
        <Link to="/about" className="navLink">
              About
            </Link>
      </div>
    ];
  }
  return (
    <div className="container-fluid nav">
      <Link to="/">
        <h1>Valet Manager</h1>
      </Link>
          {navItems}
    </div>
  );
}

export default Navigation;
