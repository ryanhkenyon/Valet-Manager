import {Link, useNavigate} from 'react-router-dom';
function LocationDiv(props) {
  const navigate = useNavigate();

  const toComponentB=()=>{
    navigate('/view/location',{state: {location:props.location, address:props.address}});
      }
    
	return (
		<div className="locationItem">
        {/* <img  className="locationImg" alt='location'/> */}
        <div className="locationItemName">
          <h5>{props.location}</h5>
          <button onClick={()=>{toComponentB()}}>
            <h6>Details</h6>
          </button>
        </div>
      </div>
	);
}

export default LocationDiv;
