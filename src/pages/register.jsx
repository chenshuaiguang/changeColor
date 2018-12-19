import React,{ Component } from 'react';
class Register extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	render(){
		return (
				<div onClick={this.props.clickRegister}>
					<div >注册</div>
				</div>
			)
	}
}
export default Register