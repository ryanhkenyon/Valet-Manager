import { Link } from "react-router-dom";

function Main(props) {
    let loggedIn = props.loggedIn;
    let context = [];

    if (loggedIn) {
        //would like toredirect to location page, for now, provide a link to location page
        context = [<Link to='/locations'>
            <h1>Check out my locations!</h1>
        </Link>]
    } else {
        context = [
            <Link to='/login'>
                <h1>Login</h1>
            </Link>,
            <h3>Don't have an account?</h3>,
            <Link to='/register'>
                <h2>Register here!</h2>
            </Link>
        ]
    }


    return (
        
        //if logged in
        <div>
            <h1>Welcome to Valet Manager</h1>
            {context}
        </div>
        
    )
    
}

export default Main;