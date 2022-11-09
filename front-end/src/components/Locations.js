import { Link } from "react-router-dom";
import mease from '../images/mease.png';

function Locations(props) {
    let context = [];
    if (props.children === [] || props.children === null || props.children === undefined) {
        context = [
            <div>
                <h2>Looks like you don't have any locations yet!</h2>
                <h3>Would you like to add one?</h3>
                <Link to="/add/location">
                    <h4>Yes I do!</h4>
                </Link>
                <Link to='/profile'>
                    <h4>No, take me to my profile</h4>
                </Link>
            </div>
        ];
    } else {
        context = [
            
        ];
    }
	return (
        <div className="Locations">
            <h1>Your Locations</h1>
            {/* {context} */}
            {/* here are fake locations to test display */}
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="locationItem">
                <img src={mease}></img>
                <div className="locationItemName">
                <h5>Mease Countryside Hospital</h5>
                <Link to="/view/location">
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Locations;