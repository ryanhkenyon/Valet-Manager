function AddLocation() {
    return (
        <div className="AddLocation">
            <h1>Add a Location!</h1>
            <form>
                <div className="form-control">
                    <label>Name: </label>
                    <input
                        type="text"
                        name="locationName"
                        required/>
                        <br/>
                        <label>Address</label>
                        <input
                        type="text"
                        name="locationName"
                        required/>
                        <br/>
                        <label id="fileUploadLabel">Image: </label>
                         <input type="file" id="fileUpload" 
                       name="image" title="hello" required/>
                </div>
                <div className="form-control">
					<button type="submit">Add Location</button>
				</div>
            </form>
        </div>
    )
}

export default AddLocation;