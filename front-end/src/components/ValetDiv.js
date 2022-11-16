import { Link, useNavigate } from "react-router-dom";

function ValetDiv(props) {

  const navigate = useNavigate();

  const toComponentB=()=>{
    navigate('/view/valet',{state: {name:props.name}});
      };

    
	return (
		<div className="valetItem">
        {/* <img src={ryan} className="valetImg" alt="valet"></img> */}
        <div className="valetItemName">
          <h5>
            {props.name}
          </h5>
          <button onClick={()=>{toComponentB()}}>
            <h6>Details</h6>
          </button>
        </div>
      </div>
	);
}

export default ValetDiv;
