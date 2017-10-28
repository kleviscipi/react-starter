import React from 'react'
import { connect } from 'react-redux'
import {loadProfile} from '../../../actions/start.js'
import Messages 	from '../../helpers/Messages.js'

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {name:'',email:'',description:''}
	}
	componentDidMount(){
		//call api with id user
		this.props.dispatch(loadProfile({id:1}))
	}
	componentWillReceiveProps(next){
		
		if(next){
			this.setState((state)=>{

				return{
					name:next.user.name,
					email:next.user.email,
					description:next.user.description
				}
			})
		}
	}
	render(){
		const {loadingprofile} = this.props

		return(
			<div className="container" >
				<Messages messages={this.props.messages}/>
				{
					loadingprofile == false ?
				        <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
				          <h4>Profile { this.state.name }</h4>
				          <section className="row text-center placeholders">
				            <div className="col-12 col-sm-12 placeholder text-center">
				              	<img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
				              	<h4>{ this.state.name }</h4>
				              	<div className="text-muted">{ this.state.email }</div>
				               	<div className="text-muted">{ this.state.description }</div>
				            </div>
				          </section>
				         </main>
				    : (<h4>Loading..... </h4>)
				}
			</div>
		)
	}

}



const mapStateToProps = (state) => {
	return {
		loadingprofile:state.start.loadingprofile,
		user:state.start.profile,
		messages:state.messages
	};
};

export default connect(mapStateToProps)(Profile);
