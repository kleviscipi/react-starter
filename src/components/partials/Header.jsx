import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		
		return (
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				  <a className="navbar-brand" href="#">Bootstrap 4.0 & React</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="/app">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <Link to='/login' className="nav-link" href="#">Login</Link>
				      </li>
				      <li className="nav-item">
				        <Link to='/singup' className="nav-link" href="#">Sing Up</Link>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				    </form>
				  </div>
				</nav>
		);
	}
}
export default Header;
