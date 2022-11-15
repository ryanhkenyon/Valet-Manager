import { Link, Navigate } from "react-router-dom";

function LocationDiv(props) {

    
	return (
		<div className="locationItem">
        <img  className="locationImg" alt='location'/>
        <div className="locationItemName">
          <h5>Mease Hospital</h5>
          <Link to="/view/location">
            <h6>Details</h6>
          </Link>
        </div>
      </div>
	);
}

export default LocationDiv;
