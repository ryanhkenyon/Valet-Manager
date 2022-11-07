import {useState} from "react";
import { Link } from "react-router-dom";

function Profile(props) {
    return (
        <div>
            <h1>Welcome to your profile!</h1>
            <h2>Here, you can view your Locations and Valets!</h2>
            <Link to="/locations">
                <h3>Take me to my Locations!</h3>
            </Link>
            <Link to="/valets">
                <h3>Take me to my Valets!</h3>
            </Link>
        </div>
    )
}

export default Profile;