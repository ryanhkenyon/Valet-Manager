import { Link } from "react-router-dom";
import ryan from '../images/ryan.png'
import bigMease from '../images/bigMease.jpg';

function Valet(props) {

    return (
        <div className="Valet">
            <div className="pageTitle">
            <h1>Ryan Kenyon</h1>
            </div>
            <img className='valetProfileImg' src={ryan} alt="valet"/>
            <h5 className="black">Minor details here</h5>
            <div id="test">

            <h3>Add Valets to this Location</h3>
            <select className='valetSelectionLocation'>
                    <option>Mease Hospital</option>
                    <option>Shephards</option>
                </select>
                <br/>
                <button>Assign Location To Valet</button>
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