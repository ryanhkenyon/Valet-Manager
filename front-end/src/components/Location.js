import mease from '../images/mease.png'
import { Link } from "react-router-dom";
import ryan from '../images/ryan.png'

function Location(props) {

    return (
        <div className="Location">
            <h1>Mease Countryside Hospital</h1>
            <img className='locationImg' src={mease}/>
            <h5>1840 Mease Drive, Safety Harbor, FL</h5>
            <div className='locationValets'>
                {/* TODO: enter valets associated with location */}
                <div className="valetItem">
                <img src={ryan}></img>
                <div className='valetItemName'>
                <h5>Ryan Kenyon</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Location;