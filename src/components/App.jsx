import React from 'react'

import Header 	from './partials/Header.jsx';
//import Sidebar 	from './partials/Sidebar.jsx';
import Footer 	from './partials/Footer.jsx';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
import Loading 		from 'react-loading';
import { getSession } from '../actions/global.js';

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
	
		return (

				<div className="vbox">
					<Header />
						{this.props.children}
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
