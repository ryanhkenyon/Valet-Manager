import bigMease from "../images/bigMease.jpg";
import { Link } from "react-router-dom";
import ryan from "../images/ryan.png";
import { Navigate } from 'react-router-dom'; 

function Location(props) {

  if(!props.loggedIn) {
    return <Navigate to='/login' replace={true}/>
}

  return (
    <div className="Location">
      <div className="pageTitle">
        <h1>Mease Countryside Hospital</h1>
      </div>
      <img className="locationProfileImg" src={bigMease} />
      <h5 className="black">1840 Mease Drive, Safety Harbor, FL</h5>
      <div id="test">
        <h3>Add Valets to this Location</h3>
        <select className="valetSelectionLocation">
          <option>Ryan Kenyon</option>
          <option>Stephanie Yulisupialous</option>
        </select>
        <br />
        <button>Add Valet To Location</button>
      </div>
      <div className="pageTitle">
        <h3>Valets at Mease Hospital</h3>
      </div>
      <div className="locationValets">
        {/* TODO: enter valets associated with location */}
        <div className="valetItem">
          <img src={ryan} className="valetImg" />
          <div className="valetItemName">
            <h5>Ryan Kenyon</h5>
            <Link to="/view/valet">
              <h6>Details</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
