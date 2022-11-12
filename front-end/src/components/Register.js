
import React, { useState } from "react";

const Register = ({createUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className="Register">
      <div className="pageTitle">
        <h1>Register Account</h1>
      </div>
      <form className="form-control">
        <label>Username</label>
        <br/>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="Username"
          onChange={(e) => {
            setEmail(e.target.value);
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
