import { Link, useNavigate } from "react-router-dom";

function ValetDiv(props) {

  const navigate = useNavigate();

  const toComponentB=()=>{
    navigate('/view/valet',{state: {name:props.name, id:props.id, locations: props.locations}});
      };

    
	return (
		<div className="locationItem">
        {/* <img src={ryan} className="valetImg" alt="valet"></img> */}
        <div className="locationItemName">
          <h5>
            {props.name}
          </h5>
          <button className="detailsButton" onClick={()=>{toComponentB()}}>
            <h6>Details</h6>
          </button>
        </div>
      </div>
	);
}

export default ValetDiv;
