import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../services";

function Main(props) {

  const [username, setUsername] = useState('');

  let loggedIn = props.loggedIn;
  let context = [];

  if (loggedIn) {
    const userData = services.getUser(props.userId).then(function(result) {
      return result;
    });

    const printUserData = (data) => {
      userData.then((a) => {
            if(Object.keys(a).includes(data)) {
              let dataIndex = Object.keys(a).indexOf(data);
              setUsername( Object.values(a)[dataIndex])
            }
          });
    };

    console.log(printUserData('username'));
    
    context = [
      <div className="main">
        <h2>Welcome back, {username}!</h2>
      </div>
    ];

    
  } else {
    context = [
      <div className="main">
        <div className="mainLink">
          <Link to="/login">
            <h3>Click here to login!</h3>
          </Link>
        </div>

        <h3>
          <br />
          Don't have an account?
        </h3>

        <div className="mainLink">
          <Link to="/register">
            <h3>Register here!</h3>
          </Link>
        </div>
      </div>,
    ];
  }

  return (
    //if logged in
    <div className="content">
      <div>
        <h1>Welcome to Valet Manager</h1>
      </div>
      {context}
    </div>
  );
}

export default Main;
