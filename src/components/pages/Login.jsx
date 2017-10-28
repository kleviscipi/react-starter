import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {ValidateSingle} from '../helpers/Validate.js'
import Messages from '../helpers/Messages.js'
import {login} from '../../actions/start.js'
import { Route, Redirect } from 'react-router'

class Login extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			email:'',
			password:''
		}

		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	onChange(event){
		
		let value = event.target.value;
		let name  = event.target.name;

		this.setState((prevState)=>{

			return {[name]:value}
		})
	}

	handleSubmit(){

		let values = {
			email:this.state.email,
			password:this.state.password,
		}

		this.props.dispatch(login(values))
	}

	componentWillReceiveProps(nextProps) {

	}

	render(){

		return(
			<div className="container" style={{marginTop:'50px'}} >

				<Messages messages={this.props.messages}/>

				{this.props.logged ? <Redirect to="/app/profile/1"/> : (null)}

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
						      <input type="email" name='email' className="form-control" value ={this.state.email} onChange= {this.onChange} placeholder="Email"/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
						    <div className="col-sm-10">
						      <input type="password" name='password' className="form-control" value ={this.state.password} onChange= {this.onChange} placeholder="Password"/>
						    </div>
						  </div>
						  <div className="form-group row">
						  	<div className="col-sm-6"></div>
						    <div className="col-sm-6">
						      	<button type="button" className="btn btn-success float-right" onClick={this.handleSubmit}>
						      	
						      		Sign in

						      	</button>
						       	<Link to="/app" type="submit" className="btn btn-warning float-right" style={{marginRight:'5px'}}>Home</Link>	
						      	<Link to="/singup" type="submit" className="btn btn-primary float-right" style={{marginRight:'5px'}}>Sing Up</Link>	
						    </div>
						  </div>
						</form>
					</div>
					<div className="row">
							<div className="col-lg-12 text-center">

								<code> Email: cipiklevis@gmail.com </code>

								<code> Password: 123456 </code>

							</div>
					</div>					
				</div>
			</div>
		)
	}

}


const mapStateToProps = (state) => {
	return {
		start:state.start.start,
		logged: state.start.logged,
		messages:state.messages
	};
};

export default connect(mapStateToProps)(Login);
