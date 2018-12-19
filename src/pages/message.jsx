import React,{ Component } from 'react';
class Msg extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	render(){
		if(this.props.propsMsg){
			return (
				<div>
					<div >登录信息</div>
				</div>
			)
		}else {
			return (
				<div>
					<div >注册信息</div>
				</div>
			)
		}
		
	}
}
export default Msg