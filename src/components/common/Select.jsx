import React from 'react';

class Select extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	
	
	render() {
		
		return (
			<select value={this.props.value} name={this.props.name} className={this.props.className} onChange={this.props.onChange} >
				{this.props.nullopt ? <option value="" >{this.props.nullopt}</option> : null }
				{this.props.options ? 
					Object.keys(this.props.options).map( (key, i) =>
					<option value={key} key={i} >{this.props.options[key]}</option>
				): null }
			</select>
		);
	}
}
export default Select;
