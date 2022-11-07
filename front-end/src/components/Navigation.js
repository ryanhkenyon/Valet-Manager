import { Link } from "react-router-dom";

function Navigation(props) {
    let loggedIn = props.loggedIn;
    let currentRoutes = [];
	if (loggedIn) {
		currentRoutes = [
			<li className="listItem">
				<Link to="/add/origami">Locations</Link>
			</li>,
			<li className="listItem">
				<Link to="/user/profile">Valets</Link>
			</li>,
			<li className="listItem">Log Out</li>,
		];
	} else {
		currentRoutes = [
			<li className="listItem">
				<Link to="/user/register">Register</Link>
			</li>,
			<li className="listItem">
				<Link to="/user/login">Login</Link>
			</li>,
		];
	}
	return (
        
		<nav className="Navigation">
            <h1>Valet Manager</h1>
			<ul>
				<li className="listItem">
					<Link to="/">
						<h2>Back home!</h2>
					</Link>
				</li>

				{currentRoutes}
			</ul>
		</nav>
	);
}

export default Navigation;