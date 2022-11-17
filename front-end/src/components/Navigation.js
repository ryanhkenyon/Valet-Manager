import { Link, Navigate, useNavigate } from "react-router-dom";

function Navigation(props) {
  const navigate = useNavigate();
  let loggedIn = props.loggedIn;
  let navItems = [];
  function clickHandler(event) {
    console.log(window.location);
      props.setLoggedIn(false);
      props.removeCookie('x-auth-token',{path:'/'});
      navigate('/');
  }

  if (loggedIn) {
    navItems = [
    	<li className="navItem">
    		<Link to="/locations" className="navLink">Locations</Link>
    	</li>,
    	<li className="navItem">
    		<Link to="/valets" className="navLink">Valets</Link>
    	</li>,
		<li className="navItem">
		<Link to="add/location" className="navLink">Add Location</Link>
	</li>,
		<li className="navItem">
		<Link to="add/valet" className="navLink">Add Valet</Link>
	</li>,
    	<li className="navItem">
		<Link className="navLink" onClick={clickHandler}>Logout</Link>
	</li>
    ];
  } else {
    navItems = [
      <li className="navItem">
        <Link to="/register" className="navLink">
          Register
        </Link>
      </li>,
      <li className="navItem">
        <Link to="/login" className="navLink">
          Login
        </Link>
      </li>
    ];
  }
  return (
    <nav className="Navigation">
      <h1 className="navTitle">Valet Manager</h1>
      <ul>
        {navItems}
        <li className="navItem">
          <Link to="/about" className="navLink">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
