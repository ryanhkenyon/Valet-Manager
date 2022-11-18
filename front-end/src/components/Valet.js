import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import ryan from "../images/ryan.png";
import bigMease from "../images/bigMease.jpg";

import { useLocation } from "react-router-dom";

import React, { useState, useEffect } from "react";

import services from "../services";

import LocationDiv from "./LocationDiv";

function Valet(props) {
  const navigate = useNavigate();

  const locationState = useLocation();

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  console.log(locationState.state);

  function runFetch() {
    services
      .getUserLocation({
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
            let oldData = JSON.stringify(locations);
            if (oldData !== newData) {
              setLocations(data);
            }
          });
      });

      
  }

  useEffect(() => {
    runFetch();
  }, []);

  function submitHandler(event) {
    event.preventDefault();

    services
      .addLocationToValet({
        locationName: location,
        valetId: locationState.state.id,
      })
      .then((data) => {
        setLocation("");
        // runFetch();
        return navigate("/valets");
      });
  }

  const locationsArray = locations.map((location, index) => {
    return (
      <option
        key={location._id}
        id={location._id}
        index={index + 1}
        location={location.location}
        address={location.address}
        valets={location.valets}
        creatorId={location.creatorId}
      >
        {location.location}
      </option>
    );
  });

  function deleteValet() {
    services
      .deleteValet({
        id: locationState.state.id,
      })
      .then((data) => {
        navigate("/valets");
      });
  }

  if (!props.loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="Valet">
      <div className="pageTitle">
        <h1>{locationState.state.name}</h1>
        <button onClick={deleteValet}>
          Delete
          {/* {locationState.state.location} */}
        </button>
      </div>
      <img className="valetProfileImg" src={ryan} alt="valet" />
      <h5 className="black">Minor details here</h5>
      <div id="test">
        <form onSubmit={submitHandler}>
          <h3>Add Valets to this Location</h3>
          <select
            value={location}
            className="valetSelectionLocation"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option>CHOOSE ONE</option>
            {locationsArray}
          </select>
          <br />
          <button type="submit">Assign Location To Valet</button>
        </form>
      </div>
      <div className="pageTitle">
        <h3>Locations for {locationState.state.name}</h3>
      </div>
      <div className="valetLocations">
        {/* TODO: enter locations associated with valet */}
        <div className="locationItem">
          <img src={bigMease} className="locationImg"></img>
          <div className="locationItemName">
            <h5>Mease Hospital</h5>
            <Link to="/view/location">
              <h6>Details</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valet;
