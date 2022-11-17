import { useState } from "react";
import { Link, Navigate , useNavigate} from "react-router-dom";
import services from "../services";
//todd: add in the login service
function Login(props) {
	
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	console.log('hello',props.loggedIn)
  const navigate = useNavigate();
	if(props.loggedIn) {
        return <Navigate to='/profile' replace={true}/>
    }

  function submitHandler(event) {
    event.preventDefault();
    services
      .userLogin({
        username,
        password,
      })
      .then((data) => {
        console.log(data);
        props.setCookie(data.cookie.name, data.cookie.token, {
          path: "/",
          maxAge: 60 * 60 * 1000,
        });
        props.setLoggedIn(true);
        props.setUserId(data.id);
        return navigate('/locations');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Login">
      <div className="pageTitle">
        <h1>Login Page</h1>
      </div>
      <form className="form-control" onSubmit={submitHandler}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
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
    </div>
  );
}

export default Login;
