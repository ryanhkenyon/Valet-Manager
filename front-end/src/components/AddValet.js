import services from "../services";
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 

const AddValet = (props) => {

    const [name, setValet] = useState('');
    const navigate = useNavigate();

    if(!props.loggedIn) {
        return <Navigate to='/login' replace={true}/>
    }


    function submitHandler(event) {
        event.preventDefault();


        //need to validate


        console.log(props)

        services.addValet({
            name,
            creatorId: props.userId
        }).then((data)=>{
            setValet('');
            return navigate('/valets')
        })
    }
    return (
        <div className="content">
            <div className='pageTitle'>
            <h1>Add a Valet</h1>
            </div>
            <form className="form-control" onSubmit={submitHandler}>
            <div>
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