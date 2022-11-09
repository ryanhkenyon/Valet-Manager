import { Link } from "react-router-dom";
import ryan from '../images/ryan.png'
import mease from '../images/mease.png';

function Valet(props) {

    return (
        <div className="Valet">
            <h1>Ryan Kenyon</h1>
            <img className='valetImg' src={ryan}/>
            <h5>I'm this guy</h5>
            <div className='valetLocations'>
                {/* TODO: enter locations associated with valet */}
                <div className="locationItem">
                <img src={mease}></img>
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