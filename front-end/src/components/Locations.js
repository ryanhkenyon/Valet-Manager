import { Link } from "react-router-dom";

function Locations(props) {
    let context = [];
    if (props.children === [] || props.children === null || props.children === undefined) {
        context = [
            <div>
                <h1>Looks like you don't have any locations yet!</h1>
                <h2>Would you like to add one?</h2>
                <Link to="/add/location">
                    <h3>Yes I do!</h3>
                </Link>
                <Link to='/profile'>
                    <h3>No, take me to my profile</h3>
                </Link>
            </div>
        ];
    }
	return (
        <div className="Locations">
            {context}
        </div>
    );
}

export default Locations;