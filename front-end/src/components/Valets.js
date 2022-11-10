import { Link } from "react-router-dom";
import ryan from '../images/ryan.png'

function Valets(props) {
    let context = [];
    if (props.children === [] || props.children === null || props.children === undefined) {
        context = [
            <div>
                <h1>Looks like you don't have any valets yet!</h1>
                <h2>Would you like to add one?</h2>
                <Link to="/add/valet">
                    <h3>Yes I do!</h3>
                </Link>
                <Link to='/profile'>
                    <h3>No, take me to my profile</h3>
                </Link>
            </div>
        ];
    } else {
        context = [
            <div>

            </div>
        ]
    }
	return (
        <div className="Valets">
            <h1>Your Valets</h1>
            {/* {context} */}
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Stephanie <br/>Yulisupialous</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Ryan <br/> Kenyon</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Stephanie <br/>Yulisupialous</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Ryan <br/> Kenyon</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Stephanie <br/>Yulisupialous</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
            <div className="valetItem">
                <img src={ryan} className='valetImg'></img>
                <div className='valetItemName'>
                <h5>Ryan <br/> Kenyon</h5>
                <Link to='/view/valet'>
                    <h6>Details</h6>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Valets;