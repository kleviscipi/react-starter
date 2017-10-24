import React from 'react'
import { Link } from 'react-router-dom';

class Singup extends React.Component{

	render(){

		return(
			<div className="container" style={{marginTop:'50px'}} >
				<div className="my-login">
					<div className="row">
						<div className="col-lg-12">
							<img src='images/logo.jpg' className="img-responsive rounded-circle my-img" />
						</div>
						<div className="col-lg-12"><p class="lead">This is the singup page!</p></div>
					</div>
					<div className="row">
						<form className="col-lg-12">
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Full Name</label>
						    <div className="col-sm-5">
						      <input type="text" className="form-control" placeholder="Name"/>
						    </div>
						    <div className="col-sm-5">
						      <input type="text" className="form-control" placeholder="Subname"/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
						    <div className="col-sm-10">
						      <input type="text" className="form-control"  placeholder="Username"/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
						    <div className="col-sm-10">
						      <input type="email" className="form-control"  placeholder="Email"/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
						    <div className="col-sm-10">
						      <input type="password" className="form-control"  placeholder="Password"/>
						    </div>
						  </div>
						  <div className="form-group row">
						  	<div className="col-sm-8"></div>
						    <div className="col-sm-4">
						      	<button type="submit" className="btn btn-success float-right">Sing Up</button>
						      	<Link to="/login" type="submit" className="btn btn-primary float-right" style={{marginRight:'5px'}}>Sing In</Link>	
						    </div>
						  </div>
						</form>
					</div>				
				</div>
			</div>
		)
	}

}


export default Singup;
