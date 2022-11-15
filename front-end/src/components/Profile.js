import {useState} from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
function Profile(props) {

    if(!props.loggedIn) {
        return <Navigate to='/login' replace={true}/>
    }

    return (
        <div className="Profile">
            <div className="pageTitle">
            <h1>Welcome to your profile!</h1>
            </div>
            <div className="mainPageBox">
            <h2>Here, you can view your Locations and Valets!</h2>
            <Link to="/locations">
                <h3>Take me to my Locations!</h3>
            </Link>
            <Link to="/valets">
                <h3>Take me to my Valets!</h3>
            </Link>
            </div>
        </div>
    )
}

export default Profile;