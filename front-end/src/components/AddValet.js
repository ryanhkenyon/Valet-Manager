function AddValet() {
    return (
        <div className="AddValet">
            <h1>Add a Valet</h1>
            <form>
                <div className="form-control">
                    <label>Name: </label>
                    <input
                        type="text"
                        name="valetName"
                        />
                </div>
                <div className="form-control">
					<button type="submit">Add Valet</button>
				</div>
            </form>
        </div>
    )
}

export default AddValet;