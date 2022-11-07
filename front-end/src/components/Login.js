import { useState } from "react";
import { Link } from "react-router-dom";
//todd: add in the login service
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="Login">
			<h1>Login Page</h1>
			<form>
				<div className="form-control">
					<label>Email:</label>
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
				<div className="form-control">
					<label>Password:</label>
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
				<div className="form-control">
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
