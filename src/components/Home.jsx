import React from 'react';


class Home extends React.Component{

	render(){
		
		return(
			<div className="jumbotron">
			  	<h1 className="display-3">Bootstrap 4 and React Mvc!</h1>
			  	<p className="lead">This is a starter project with React 16 and boostrap 4 </p>
			  	<hr className="my-4"/>
			  	
			  	<p className="lead">
			    	<a className="btn btn-primary btn-lg" href="getbootstrap.com" role="button">Learn More Boorstrap</a>
			    	<br/>
			    	<br/>
			    	<a className="btn btn-info btn-lg" href="https://reactjs.org/" role="button">Learn More React</a>
			  	</p>

			  	<p>For installing:</p>

			  	<p></p>
			</div>
		);
	}
}

export default Home;
