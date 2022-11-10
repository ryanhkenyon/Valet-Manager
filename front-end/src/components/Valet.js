import { Link } from "react-router-dom";
import ryan from '../images/ryan.png'
import bigMease from '../images/bigMease.jpg';

function Valet(props) {

    return (
        <div className="Valet">
            <h1>Ryan Kenyon</h1>
            <img className='valetProfileImg' src={ryan} alt="valet"/>
            <h5>I'm this guy</h5>
            
            <h3 id="test">Add Valets to this Location</h3>
            <select className='valetSelectionLocation'>
                    <option>Mease Hospital</option>
                    <option>Shephards</option>
                </select>
                <br/>
                <button>Add Valet</button>
            <div className='valetLocations'>
                {/* TODO: enter locations associated with valet */}
                <div className="locationItem">
                <img src={bigMease} className="locationImg"></img>
                <div className='locationItemName'>
                <h5>Mease Countryside Hospital</h5>
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