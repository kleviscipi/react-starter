import React from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from 'react-router-config'
import {createRoutes} from './route.js'

const routes = createRoutes();

class Root extends React.Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<BrowserRouter>
					{renderRoutes(routes)}
				</BrowserRouter>
			</Provider>
		);
	}
};

export default connect()(Root)