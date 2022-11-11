import { Link } from "react-router-dom";

function Main(props) {
  let loggedIn = props.loggedIn;
  let context = [];

  if (loggedIn) {
    //would like toredirect to location page, for now, provide a link to location page
    context = [
      <Link to="/locations">
        <h1>Check out my locations!</h1>
      </Link>,
    ];
  } else {
    context = [
      <div className="mainPageBox">
        <div className="mainLink">
          <Link to="/login">
            <h3>Click here to login!</h3>
          </Link>
        </div>
        
        <h3 className="pageTitle2">
          <br />
          Don't have an account?
        </h3>
        
        <div className="mainLink">
          <Link to="/register">
            <h2>Register here!</h2>
          </Link>
        </div>
        
      </div>,
    ];
  }

  return (
    //if logged in
    <div className="Main">
      <div className="pageTitle">
        <h1>Welcome to Valet Manager</h1>
      </div>
      {context}
    </div>
  );
}

export default Main;
