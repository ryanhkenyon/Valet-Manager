import services from "../services";
import React, { useState } from "react";

const Register = ({createUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  function submitHandler(event) {
		event.preventDefault();
		let hasError = false;
		if(username.length == 0) {
			//error
			console.log('no username');
			hasError = true;
		}
		if(password.length == 0) {
			//error
			console.log('no password');
			hasError = true;
		}
		if(!hasError) {
			services.userRegister({
				username,
				password,
				rePassword
			}).then((data)=>{
				console.log('!!!!' + username, password, rePassword);
			});
		} else {
			console.log("There was an error, fix and try again");
		}
	}
  return (
    <div className="Register">
      <div className="pageTitle">
        <h1>Register Account</h1>
      </div>
      <form className="form-control" onSubmit={submitHandler}>
        <label>Username</label>
        <br/>
        <input
          type="text"
          value={username}
          name="email"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="Password"
          onChange={(e) => {
            //console.log(e.target.value);
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <label>Repeat Password</label>
        <br/>
        <input
          type="text"
          value={rePassword}
          name="rePassword"
          placeholder="Repeat Password"
          onChange={(e) => {
            //console.log(e.target.value);
            setRePassword(e.target.value);
          }}
        />
        <div>
					<button type="submit">Register</button>
				</div>
      </form>
    </div>
  );
}

export default Register;
