import { Link } from "react-router-dom";

function Navigation(props) {
  let loggedIn = props.loggedIn;
  let navItems = [];
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
		<Link to="logout" className="navLink">Logout</Link>
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
      </li>,

      //take this out later cuz we're not logged in yet
      <li className="navItem">
        <Link to="/logout" className="navLink">
          TEMP Logout
        </Link>
      </li>,
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
