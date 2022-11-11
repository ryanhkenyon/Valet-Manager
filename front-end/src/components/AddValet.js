function AddValet() {
    return (
        <div className="AddValet">
            <h1>Add a Valet</h1>
            <form>
            <div className="form-control">
                    <label>Name: </label>
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
					<button type="submit">Add Valet</button>
				</div>
            </form>
        </div>
    )
}

export default AddValet;