import bigMease from "../images/bigMease.jpg";
import { Link, useHref } from "react-router-dom";
import ryan from "../images/ryan.png";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import services from "../services";


import ValetDiv from './ValetDiv';

function Location(props) {
  const navigate = useNavigate();
  const locationState = useLocation();

  const [valet, setValet] = useState("");
  const [valets, setValets] = useState([]);
  const [valetId, setValetId] = useState('');

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
        }).then((data)=>{
          services.getLocationValets({
            locationId: locationState.state.id
          }).then((valets)=>{
          console.log('AYYYEEE', valets)
          console.log(valets)
          // let array = [];
          // let i = 0;
          // for (let valet of locationState.state.valets) {
          //   services.getOneValet(valet).then((valetObj)=>{

          //     array[i] = valetObj[0].name;
          //     array[i+1] = valetObj[0]._id;
          //     i+=2;
          //   });
          // }
          // console.log(array)
          // console.log(array.reduce((a,v)=>({...a,[v]:v})),{});
          // console.log([1,2,3,4])
          // console.log(locationState.state.valets)
          // console.log(objArray)
        })
      })
      
  }

  useEffect(() => {
    runFetch();
    
  }, []);

  if (!props.loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  
  const valetArray = valets.map((valet, index) => {
    return (
      <option
        key={valet._id}
        id={valet._id}
        index={index + 1}
        name={valet.name}
        locations={valet.locations}
        creatorId={valet.creatorId}
      >
        {valet.name}
      </option>
    );
  });
  
  let employees = []
  
  for (let valet of valets) {
    console.log(valet)
    if (valet.locations.length == 0) {
      console.log('empty')
    } else {
      console.log(valet.locations)
      for (let location of valet.locations) {
        console.log(locationState.state.id)
        if (location == locationState.state.id) {
          employees.push(valet)
        }
      }
    }
  }
  
  console.log('PLEASE', employees)
  let employeeDivs;
  
  if (employees.length == 0) {
    employeeDivs = (<h2 className="black">This location has no valets!</h2>)
  } else {
    employeeDivs = employees.map((employee, index) => {
      return (
        <ValetDiv
        key={employee._id}
        id={employee._id}
        index ={index + 1}
        name={employee.name}
        locations={employee.locations}
        creatorId={employee.creatorId}
        />
        )
      })
      
    }
    
    
    function deleteLocation() {
      services
      .deleteLocation({
        id: locationState.state.id,
      })
      .then((data) => {
        navigate("/locations");
      });
    }

    function submitHandler(event) {
      event.preventDefault();
      services
        .addValetToLocation({
          valetName: valet,
          locationId: locationState.state.id,
        })
        .then((data) => {
          console.log('YASH', data)
          setValet("");
          
        });
    }
    
    return (
      <div className="Location">
      <div className="pageTitle">
        <h1>{locationState.state.location}</h1>
        <button onClick={deleteLocation}>
          Delete {locationState.state.location}
        </button>
      </div>
      <img className="locationProfileImg" src={bigMease} />
      <h5 className="black">{locationState.state.address}</h5>
      <div id="test">
        <form onSubmit={submitHandler}>
          <h3>Add Valets to this Location</h3>
          <select
            className="valetSelectionLocation"
            value={valet}
            onChange={(e) => {
              setValet(e.target.value);
            }}
          >
            <option>CHOOSE ONE</option>
            {valetArray}
          </select>
          <br />
          <button type="submit" >Add Valet To Location</button>
        </form>
      </div>
      <div className="pageTitle">
        <h3>Valets at {locationState.state.location}</h3>
      </div>
      <div className="locationValets">
        {/* TODO: enter valets associated with location */}
        {employeeDivs}
      </div>
    </div>
  );
}

export default Location;
