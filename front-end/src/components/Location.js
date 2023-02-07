import { Navigate, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import services from "../services";
import ValetDiv from "./ValetDiv";

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
    services
      .addValetToLocation({
        valetName: valet,
        locationId: locationState.state.id,
      })
      .then((data) => {
        setValet("");
        setValets('');
        navigate("/locations");
      });
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

  let employees = [];

  for (let valet of valets) {
    if (valet.locations.length == 0) {
    } else {
      for (let location of valet.locations) {
        if (location == locationState.state.id) {
          employees.push(valet);
        }
      }
    }
  }

  let employeeDivs, employeeCount;

  if (employees.length == 0) {
    employeeDivs = <h2 className="black">This location has no valets!</h2>;
  } else {
    employeeCount = <h2 className="black">This location currently has {employees.length} valets!</h2>
    employeeDivs = employees.map((employee, index) => {
      return (
        <ValetDiv
          key={employee._id}
          id={employee._id}
          index={index + 1}
          name={employee.name}
          locations={employee.locations}
          creatorId={employee.creatorId}
        />
      );
    });
  }

  

  

  return (
    <div className="content">
      <div className="pageTitle">
        <h1>{locationState.state.location}</h1>
        <button onClick={deleteLocation} className="deleteButton">
          Delete
        </button>
      </div>
      <h5 className="black">Located: {locationState.state.address}</h5>
      {employeeCount}
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
          <button type="submit" className="addButton">Add Valet To Location</button>
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
