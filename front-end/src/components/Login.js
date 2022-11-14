import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import services from "../services";
//todd: add in the login service
function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function submitHandler(event) {
		event.preventDefault();
		services.userLogin({
			username,
			password
		}).then((data)=>{
			console.log(data);
			props.setCookie(data.cookie.name, data.cookie.token, {path: '/'});
			props.setLoggedIn(true);
			props.setUserId(data._id);
			// <Navigate to='/' replace={true}/>
		}).catch(error=>console.log(error));
	}

	return (
		<div className="Login">
			<div className="pageTitle">
			<h1>Login Page</h1>
			</div>
			<form className="form-control" onSubmit={submitHandler}>
				<div>
					<label>Username:</label>
					<br/>
					<input
						type="text"
						value={username}
						name="username"
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</div>
				<div >
					<label>Password:</label>
					<br/>
					<input
						type="password"
						value={password}
						name="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
            {/* i'm cheating right now */}
            <Link to="/profile">
                <h4>Take me to profile page</h4>
            </Link>
		</div>
	);
}

export default Login;
