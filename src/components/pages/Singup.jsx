import React 			from 'react'
import { connect } 		from 'react-redux'
import {ValidateSingle} from '../helpers/Validate.js'
import Messages 		from '../helpers/Messages.js'
import {singUp} 		from '../../actions/start.js'
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom';


class Singup extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			name:'',
			subname:'',
			username:'',
			email:'',
			password:''
		}

		this.onChange 		= this.onChange.bind(this);
		this.handleSubmit 	= this.handleSubmit.bind(this)
	}
	
	onChange(event){
		let name 	= event.target.name;
		let value 	= event.target.value;

		this.setState((state)=>{
			return {[name]:value}
		}) 
	}

	handleSubmit(event){
		
		event.preventDefault();
		
		let values = {
			name:this.state.name,
			subname:this.state.subname,
			username:this.state.username,
			email:this.state.email,
			password:this.state.password,
		}

		this.props.dispatch(singUp(values))
	}
	render(){

		return(
			<div className="container" style={{marginTop:'50px'}} >
				<Messages messages={this.props.messages}/>
				
				{this.props.singup ? <Redirect to="/app/profile/1"/> : (null)}

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
						    <label for="inputEmail3" className="col-sm-2 col-form-label" >Full Name</label>
						    <div className="col-sm-5">
						      <input type="text" name="name" value={this.state.name} className="form-control" placeholder="Name" onChange={this.onChange}/>
						    </div>
						    <div className="col-sm-5">
						      <input type="text" name="subname" value={this.state.subname} className="form-control" placeholder="Subname" onChange={this.onChange}/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
						    <div className="col-sm-10">
						      <input type="text" name="username" value={this.state.username} className="form-control"  placeholder="Username" onChange={this.onChange}/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
						    <div className="col-sm-10">
						      <input type="email" name="email" value={this.state.email} className="form-control"  placeholder="Email" onChange={this.onChange}/>
						    </div>
						  </div>
						  <div className="form-group row">
						    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
						    <div className="col-sm-10">
						      <input type="password" value={this.state.password}  name="password" className="form-control" onChange={this.onChange}  placeholder="Password"/>
						    </div>
						  </div>
						  <div className="form-group row">
						  	<div className="col-sm-6"></div>
						    <div className="col-sm-6">
						      	<button type="button" onClick={this.handleSubmit} th className="btn btn-success float-right">Sing Up</button>
						      	<Link to="/login" type="submit" className="btn btn-primary float-right" style={{marginRight:'5px'}}>Sing In</Link>	
						    	<Link to="/app" type="submit" className="btn btn-warning float-right" style={{marginRight:'5px'}}>Home</Link>	
						    </div>
						  </div>
						</form>
					</div>				
				</div>
			</div>
		)
	}

}



const mapStateToProps = (state) => {
	return {
		start:state.start.start,
		singup: state.start.singup,
		messages:state.messages
	};
};

export default connect(mapStateToProps)(Singup);
