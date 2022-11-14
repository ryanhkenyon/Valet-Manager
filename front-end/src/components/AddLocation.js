import services from "../services";
import React, {useState} from 'react';

function AddLocation() {

    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        services.addLocation({
            location,
            address
        }).then((data)=>{
            console.log(data);
        });
    }

    return (
        <div className="AddLocation">
            <div className="pageTitle">
            <h1>Add a Location!</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label>Name</label>
                    <br/>
                    <input
                        type="text"
                        name="location"
                        placeholder="Enter Name Here..."
                        onChange={(e)=>{
                            setLocation(e.target.value)
                        }}
                        required/>
                        <br/>
                        <label>Address: </label>
                        <br/>
                        <input
                        type="text"
                        name="address"
                        placeholder="Enter address here..."
                        onChange={(e)=>{
                            setAddress(e.target.value)
                        }}
                        required/>
                        <br/>
                        {/* <label id="fileUploadLabel">Image: </label>
                        <br/>
                         <input type="file" id="locationButton" 
                       name="image" title="hello" required/>
                       <br/> */}
					<button  type="submit">Add Location</button>
                </div>
				
            </form>
        </div>
    )
}

export default AddLocation;