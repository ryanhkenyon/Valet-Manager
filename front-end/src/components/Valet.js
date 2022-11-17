import { Link } from "react-router-dom";
import { Navigate , useNavigate} from 'react-router-dom'; 
import ryan from '../images/ryan.png'
import bigMease from '../images/bigMease.jpg';


import {useLocation} from 'react-router-dom';

import React, { useState, useEffect } from "react";

import services from "../services";

function Valet(props) {
    const navigate = useNavigate();

    const locationState = useLocation();

    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([]);

  function runFetch() {
    services
      .getUserLocation({
        id: props.userId,
      })
      .then((data) => {
        console.log(data, "help");
        services
          .getUser({
            creatorId: props.userId,
          })
          .then((user) => {
            console.log(data, user);
            data = data.map((item) => {
              item.author = user.username;
              return item;
            });
            console.log(data);
            let newData = JSON.stringify(data);
            let oldData = JSON.stringify(locations);
            if (oldData !== newData) {
              setLocations(data);
            }
          });
      });
  }

  useEffect(() => {
    console.log("searched");
    runFetch();
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    
    console.log(location)
    //if location or adddress are empty

    services.addLocationToValet({
        locationId: location
    }).then((data)=>{
        setLocation('');
        // runFetch();
        console.log(data);
        return navigate('/locations')
    });
}

console.log(locations)

  const locationsArray = locations.map((location, index) => {
    return (
      <option
        key={location._id}
        id={location._id}
        index={index + 1}
        location={location.location}
        address={location.address}
        creatorId={location.creatorId}
      >{location.location}</option>
    );
  });

  console.log(locationsArray)

    if(!props.loggedIn) {
        return <Navigate to='/login' replace={true}/>
    }

    return (
        <div className="Valet">
            <div className="pageTitle">
            <h1>{locationState.state.name}</h1>
            </div>
            <img className='valetProfileImg' src={ryan} alt="valet"/>
            <h5 className="black">Minor details here</h5>
            <div id="test">
            <form onClick={submitHandler}>
            <h3>Add Valets to this Location</h3>
            <select value={location}className='valetSelectionLocation' onChange={(e)=>{setLocation(e.target.value)}}>
                    {locationsArray}
                </select>
                <br/>
                <button>Assign Location To Valet</button>
            </form>
            </div>
            <div className="pageTitle">
                <h3>Locations for Ryan Kenyon</h3>
            </div>
            <div className='valetLocations'>
                {/* TODO: enter locations associated with valet */}
                <div className="locationItem">
                <img src={bigMease} className="locationImg"></img>
                <div className='locationItemName'>
                <h5>Mease Hospital</h5>
                <Link to='/view/location'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Valet;