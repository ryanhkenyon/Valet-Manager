import { Link, Navigate } from "react-router-dom";

function ValetDiv(props) {

    
	return (
		<div className="valetItem">
        {/* <img src={ryan} className="valetImg" alt="valet"></img> */}
        <div className="valetItemName">
          <h5>
            {props.name}
          </h5>
          <Link to="/view/valet">
            <h6>Details</h6>
          </Link>
        </div>
      </div>
	);
}

export default ValetDiv;
