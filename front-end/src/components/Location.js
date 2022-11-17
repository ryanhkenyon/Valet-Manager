import bigMease from "../images/bigMease.jpg";
import { Link } from "react-router-dom";
import ryan from "../images/ryan.png";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import services from "../services";

function Location(props) {
  const navigate = useNavigate();
  const locationState = useLocation();

  const [valet, setValet] = useState("");
  const [valets, setValets] = useState([]);

  function runFetch() {
    services
      .getUserValets({
        id: props.userId,
      })
      .then((data) => {
        services
          .getUser({
            creatorId: props.userId,
          })
          .then((user) => {
            data = data.map((item) => {
              item.author = user.username;
              return item;
            });
            let newData = JSON.stringify(data);
            let oldData = JSON.stringify(valets);
            if (oldData !== newData) {
              setValets(data);
            }
          });
      });
  }

  useEffect(() => {
    runFetch();
  }, []);

  if (!props.loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  function submitHandler(event) {
    event.preventDefault();

    //if location or adddress are empty

    services
      .addValetToLocation({
        valetId: valet,
      })
      .then((data) => {
        setValet("");
        // runFetch();
        console.log(data);
      });
  }


  const valetArray = valets.map((valet, index) => {
    
    return (
      <option
        key={valet._id}
        id={valet._id}
        index={index + 1}
        name={valet.name}
        creatorId={valet.creatorId}
      >
        {valet.name}
      </option>
    );
  });

  function deleteLocation() {
    services.deleteLocation({
      id: locationState.state.id
    }).then((data)=>{
      navigate('/locations')
    })
  }

  
  return (
    <div className="Location">
      <div className="pageTitle">
        <h1>{locationState.state.location}</h1>
        <button onClick={deleteLocation}>Delete {locationState.state.location}</button>
      </div>
      <img className="locationProfileImg" src={bigMease} />
      <h5 className="black">{locationState.state.address}</h5>
      <div id="test">
        <form onClick={submitHandler}>
          <h3>Add Valets to this Location</h3>
          <select
            className="valetSelectionLocation"
            value={valet}
            onChange={(e) => {
              setValet(e.target.value);
            }}
          >{valetArray}</select>
          <br />
          <button>Add Valet To Location</button>
        </form>
      </div>
      <div className="pageTitle">
        <h3>Valets at {locationState.state.location}</h3>
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
