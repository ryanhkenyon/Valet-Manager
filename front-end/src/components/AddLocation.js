function AddLocation() {
    return (
        <div className="AddLocation">
            <div className="pageTitle">
            <h1>Add a Location!</h1>
            </div>
            <form>
                <div className="form-control">
                    <label>Name</label>
                    <br/>
                    <input
                        type="text"
                        name="locationName"
                        placeholder="Enter Name Here..."
                        required/>
                        <br/>
                        <label>Address: </label>
                        <br/>
                        <input
                        type="text"
                        name="locationName"
                        placeholder="Enter address here..."
                        required/>
                        <br/>
                        <label id="fileUploadLabel">Image: </label>
                        <br/>
                         <input type="file" id="locationButton" 
                       name="image" title="hello" required/>
                       <br/>
					<button  type="submit">Add Location</button>
                </div>
				
            </form>
        </div>
    )
}

export default AddLocation;