import React from 'react'
import {ValidateSingle} from '../helpers/Validate.js'

class Login extends React.Component{

	render(){
		return(
			<div className="container" style={{marginTop:'50px'}} >
				<div className="my-login">
					<div className="row">
						<div className="col-lg-12">
							<img src='images/logo.jpg' className="img-responsive rounded-circle my-img" />
						</div>
					</div>
					<div className="row">
						<form className="col-lg-12">
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
						    <div className="col-sm-10">
						      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
						    <div className="col-sm-10">
						      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
						    </div>
						  </div>
						  <div className="form-group row">
						  	<div className="col-sm-10"></div>
						    <div className="col-sm-2">
						      <button type="submit" className="btn btn-primary float-right">Sign in</button>
						    </div>
						  </div>
						</form>
					</div>					
				</div>
			</div>
		)
	}

}


export default Login;
