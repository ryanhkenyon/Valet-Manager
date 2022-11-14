import services from "../services";
import React, { useState } from 'react';

const AddValet = () => {

    const [name, setValet] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        services.addValet({
            name
        }).then((data)=>{
            console.log('something worked?')
        })
    }
    return (
        <div className="AddValet">
            <div className='pageTitle'>
            <h1>Add a Valet</h1>
            </div>
            <form>
            <div className="form-control" onSubmit={submitHandler}>
                    <label>Name: </label>
                    <br/>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e)=>{
                            setValet(e.target.value)
                        }}
                        required/>
                        <br/>
                        {/* <label id="fileUploadLabel">Image: </label>
                        <br/>
                         <input type="file" id="locationButton" 
                       name="image" title="hello" required/>
                       <br/> */}
					<button type="submit">Add Valet</button>
                </div>
				
            </form>
        </div>
    )
}

export default AddValet;