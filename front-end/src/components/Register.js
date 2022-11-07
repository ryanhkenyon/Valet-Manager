import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className="Register">
        <h3>Register</h3>
      <form action="/post/register" method="POST">
        <label>Username</label>
        <br></br>
        <input
          type="text"
          value={email}
          name="email"
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
          onChange={(e) => {
            //console.log(e.target.value);
            setRePassword(e.target.value);
          }}
        />
        <div className="form-control">
					<button type="submit">Register</button>
				</div>
      </form>
    </div>
  );
}

export default Register;
