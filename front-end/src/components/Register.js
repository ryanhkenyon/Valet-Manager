import services from "../services";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if(props.loggedIn) {
    return <Navigate to='/profile' replace={true}/>
  }

  function submitHandler(event) {
		event.preventDefault();
		let hasError = false;
    let error = '';
		if(username.length < 5) {
			error += "Username must be 5 characters minimum. ";
			hasError = true;
		}
		if(password.length < 5) {
      if (error != '') {
        error = 'Username and password must be 5 characters minimum. ';
      } else {
        error += "Password must be 5 characters minimum. ";
      }
			hasError = true;
		}
    if(password !== rePassword) {
      error += 'Passwords must match. ';
      hasError = true;
    }
		if(!hasError) {
			services.userRegister({
				username,
				password,
				rePassword
			}).then((data)=>{
        if (data._id) {
          navigate('/login');
        } else {
          setError(data.errors[0].msg)
        }
			}).catch((error) => console.log(error));
		} else {
			setError(error);
		}
	}
  return (
    <div className="content">
      <div>
        <h1>Register Account</h1>
      </div>
      <form className="form-control" onSubmit={submitHandler}>
        <label>Username</label>
        <br/>
        <input
          type="text"
          value={username}
          name="email"
          placeholder="Minimum 5 characters"
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
          placeholder="Minimum 5 characters"
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
          placeholder="Must match password"
          onChange={(e) => {
            //console.log(e.target.value);
            setRePassword(e.target.value);
          }}
        />
        <div>
					<button type="submit">Register</button>
				</div>
      <label>{error}</label>
      </form>
    </div>
  );
}

export default Register;
