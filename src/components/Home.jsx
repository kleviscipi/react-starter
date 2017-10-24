import React from 'react';


class Home extends React.Component{

	render(){
		
		return(
			<div className="jumbotron">
			  	<h1 className="display-3">Bootstrap 4 and React Mvc!</h1>
			  	<p className="lead">This is a starter project with react and boostrap 4</p>
			  	<hr className="my-4"/>
			  	<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			  	<p className="lead">
			    	<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  	</p>
			</div>
		);
	}
}

export default Home;
