import { Navigate, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import services from "../services";
import LocationDiv from "./LocationDiv";

function Valet(props) {
  const navigate = useNavigate();
  const locationState = useLocation();

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);

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

  if (!props.loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  function submitHandler(event) {
    event.preventDefault();
    services
      .addLocationToValet({
        locationName: location,
        valetId: locationState.state.id,
      })
      .then((data) => {
        setLocation("");
        setLocations("");
      });
    navigate("/valets");
  }

  function deleteValet() {
    services
      .deleteValet({
        id: locationState.state.id,
      })
      .then((data) => {
        navigate("/valets");
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

  let locationsData = [];

  for (let location of locations) {
    if (location.valets.length == 0) {
    } else {
      for (let valet of location.valets) {
        if (valet == locationState.state.id) {
          locationsData.push(location);
        }
      }
    }
  }

  let locationDivs, employedMessage;

  if (locationsData.length == 0) {
    locationDivs = <h2 className="black">This valet has no locations!</h2>;
    employedMessage = (
      <h2>This valet is currently without work.</h2>
    );
  } else {
    employedMessage = (
      <h4>
        This valet is currently assigned to {locationsData.length} locations!
      </h4>
    );
    locationDivs = locationsData.map((location, index) => {
      return (
        <LocationDiv
          key={location._id}
          id={location._id}
          index={index + 1}
          location={location.location}
          address={location.address}
          valets={location.valets}
          creatorId={location.creatorId}
        />
      );
    });
  }

  return (
    <div className="content">
      <h1>{locationState.state.name}</h1>
      {employedMessage}
      <div className="test">
        <form onSubmit={submitHandler}>
          <h3>Add This Valet to a Location!</h3>
          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option>CHOOSE ONE</option>
            {locationsArray}
          </select>
          <br />
          <button type="submit" className="addButton">
            Assign Location To Valet
          </button>
        </form>
        <button onClick={deleteValet} className="deleteButton">
          Delete Valet
        </button>
      </div>
      <h3>Locations for {locationState.state.name}</h3>
      <div className="valetLocations">{locationDivs}</div>
    </div>
  );
}

export default Valet;
