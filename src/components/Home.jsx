import React from 'react';
import {Config} from './helpers/Config.js'

class Home extends React.Component{

	render(){
		
		return(
			<div className="jumbotron container">
			  	<h1 className="display-3">Bootstrap 4, React!</h1>
			  	<p className="lead">This is a starter project with React 16 and boostrap 4 </p>
			  	<hr className="my-4"/>
			  	
			  	<p className="lead">
			    	<a className="btn btn-primary btn-lg" href="getbootstrap.com" role="button">Learn More Boorstrap</a>
			    	<br/>
			    	<br/>
			    	<a className="btn btn-info btn-lg" href="https://reactjs.org/" role="button">Learn More React</a>
			  	</p>

			  	<p>For installing:</p>

			  	<p>Before clone the respository <code>{"git clone " + Config.author.repositoryLink}</code></p>
			  	<p><code>npm install</code> : for installing alla packages</p>
			  	<p><code>npm start</code>: start app</p>
			  	<p>Route to home page <code>/app</code></p>
			  	<p>Route to login page <code>/login</code></p>
			  	<p>Route to singup page <code>/singup</code> , this is just a simulation of singup</p>
			  	<p>For configurations i use just the react-scripts and if you want to change the configurations go to <code>package.json</code></p>
			  	<br/>
			  	<p>
			  		<code>"scripts"</code><br/>
			  		<code> 		"build-css": "node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/",</code><br/>
					<code>	    "watch-css": "npm run build-css && node-sass-chokidar src/assets/scss/style.scss -o src/assets/css/ --watch ",</code><br/>
					<code>	    "start-js": "react-scripts start",</code><br/>
					<code>	    "start": "npm-run-all -p watch-css start-js ",</code><br/>
					<code>	    "build": "npm run build-css && react-scripts build",</code><br/>
					<code>	    "test": "react-scripts test --env=jsdom",</code><br/>
					<code>	    "eject": "react-scripts eject"</code><br/>
						  
			  		
			  	</p>

			  	<h3>Structure</h3>
			  	<img src="/images/structure.png" />
			</div>
		);
	}
}

export default Home;
