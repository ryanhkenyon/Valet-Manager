import ValetDiv from "./ValetDiv";
import React, { useState, useEffect } from "react";
import services from "../services";

import { Navigate, Link } from "react-router-dom";

function Valets(props) {
  let context = [];
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
              item.creatorId = user.username;
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

  const valetsArray = valets.map((valet, index) => {
    return (
      <ValetDiv
        key={valet._id}
        id={valet._id}
        index={index + 1}
        name={valet.name}
        creatorId={valet.creatorId}
      />
    );
  });

  if (!props.loggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  // if (
  //   props.children === [] ||
  //   props.children === null ||
  //   props.children === undefined
  // ) {
  //   context = [
  //     <div>
  //       <h1>Looks like you don't have any valets yet!</h1>
  //       <h2>Would you like to add one?</h2>
  //       <Link to="/add/valet">
  //         <h3>Yes I do!</h3>
  //       </Link>
  //       <Link to="/profile">
  //         <h3>No, take me to my profile</h3>
  //       </Link>
  //     </div>,
  //   ];
  // } else {
  //   context = [<div></div>];
  // }

  if (valetsArray.length == 0) {
    return (
      <div className="Valets">
      <div className="pageTitle">
        <h1>Your Valets</h1>
        </div>
        <div className="mainPageBox">
      <h3>You have no valets!</h3>
      <div className="mainLink">
      <Link  to='/add/valet'>
        <h2>Add one here!</h2>
      </Link>
      </div>
      </div>
      </div>
    )
  }

  return (
    <div className="Valets">
      <div className="pageTitle">
        <h1>Your Valets</h1>
      </div>
      {valetsArray}
    </div>
  );
}

export default Valets;
