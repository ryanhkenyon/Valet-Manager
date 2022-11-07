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
                        />
                </div>
                <div className="form-control">
					<button type="submit">Add Location</button>
				</div>
            </form>
        </div>
    )
}

export default AddLocation;