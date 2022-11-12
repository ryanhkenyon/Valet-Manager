import { useState } from "react";
import { Link } from "react-router-dom";
//todd: add in the login service
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="Login">
			<div className="pageTitle">
			<h1>Login Page</h1>
			</div>
			<form className="form-control">
				<div>
					<label>Email:</label>
					<br/>
					<input
						type="text"
						value={email}
						name="email"
						onChange={(e) => {
							//console.log(e.target.value);
							setEmail(e.target.value);
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
							//console.log(e.target.value);
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
