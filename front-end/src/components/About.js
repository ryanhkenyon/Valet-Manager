function About() {
    return (
        <div className='About'>
            <div className="pageTitle">
      <h1>About</h1>
      </div>
      <div className="mainPageBox">
            <p>Valet-Manager is a React-based web application built for managing your Valet business by keeping track of your Locations of business and your Valets as well.
            </p>
            <p>First, register your account in the navbar above. Usernames and passwords must be a minimum of 5 characters.</p>
            <p>After logging in, you will be directed to your Locations page. The navbar above will have links to add Locations and Valets to your database. Click on either of these links and fill out the required fields to upload your Location or Valet.</p>
            <p>After making your first Location and Valet, each one respectively will have a "Details" button under their names. Clicking this button will take you to the Location's or Valet's details page.</p>
            <p>On a Location's details page, there is an option to Add Valet to Location. Simply select which Valet you'd like to assign to the Location and click the button below!</p>
      </div>
        </div>
    )
}

export default About;