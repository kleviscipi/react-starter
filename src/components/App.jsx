import React from 'react'

import Header 	from './partials/Header.jsx';
//import Sidebar 	from './partials/Sidebar.jsx';
import Footer 	from './partials/Footer.jsx';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import Loading 		from 'react-loading';
import { initSession } from '../actions/start.js';

import { matchRoutes, renderRoutes } from 'react-router-config'


/***INCLUDE BOOTSTRAP***/

import '../assets/css/style.css'
import 'bootstrap';


class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount(){
	
	}
	
	componentWillReceiveProps(nextProps){
	
	}
	
	render() {
		const { route, location } = this.props;
		return (

				<div>
					<Header />
						<div className="container">
							{renderRoutes(route.routes)}
						</div>
					<Footer />
				</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		loadingApp: true,
	};
};

export default connect(mapStateToProps)(App);
