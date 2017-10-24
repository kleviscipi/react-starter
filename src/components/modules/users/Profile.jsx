import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component{

	render(){
		console.log("My  profile")
		return(
			<div className="container" >
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>
				<h1>Profile</h1>

			</div>
		)
	}

}



const mapStateToProps = (state) => {
	return {
		loadingApp: true,
	};
};

export default connect(mapStateToProps)(Profile);
