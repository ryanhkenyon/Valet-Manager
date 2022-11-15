import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import bigMease from "../images/bigMease.jpg";
import { Navigate } from 'react-router-dom';
import services from "../services";
import LocationDiv from "./LocationDiv";

function Locations(props) {
  let context = [];
  const [locations, setLocations] = useState([]);
  console.log('benus')


    services.getUserLocation({
        id: props.userId
    }).then((data)=>{
        services.getUser({
            id:props.userId
        }).then((user)=>{
          console.log(data, user);
            data = data.map(item=>{
                item.author = user.username;
      return item;
    });
            console.log(data);
    let newData = JSON.stringify(data);
    let oldData = JSON.stringify(locations);
    if (oldData !== newData) {
                setLocations(data);
    }
        })
    })


// useEffect(() => {
//   console.log("searched");
//   runFetch();
// }, []);

const locationsArray = locations.map((location,index) => {
return (
  <LocationDiv
    key={location._id}
    index={index+1}
    location={location.location}
    address={location.address}
    creatorId={location.creatorId}
  />
);
});



  if(!props.loggedIn) {
    return <Navigate to='/login' replace={true}/>
}

  if (
    props.children === [] ||
    props.children === null ||
    props.children === undefined
  ) {
    context = [
      <div>
        <h2>Looks like you don't have any locations yet!</h2>
        <h3>Would you like to add one?</h3>
        <Link to="/add/location">
          <h4>Yes I do!</h4>
        </Link>
        <Link to="/profile">
          <h4>No, take me to my profile</h4>
        </Link>
      </div>,
    ];
  } else {
    context = [{locationsArray}];
  }
  return (
    <div className="Locations">
      <div className="pageTitle">
      <h1>Your Locations</h1>
      </div>
      {context}
    </div>
  );
}

export default Locations;
