import React, { useState } from 'react';

function AddValet() {
    const [newValet, setValet] = useState({});
    return (
        <div className="AddValet">
            <div className='pageTitle'>
            <h1>Add a Valet</h1>
            </div>
            <form>
            <div className="form-control">
                    <label>Name: </label>
                    <br/>
                    <input
                        type="text"
                        name="locationName"
                        required/>
                        <br/>
                        <label id="fileUploadLabel">Image: </label>
                        <br/>
                         <input type="file" id="locationButton" 
                       name="image" title="hello" required/>
                       <br/>
					<button type="submit">Add Valet</button>
                </div>
				
            </form>
        </div>
    )
}

export default AddValet;