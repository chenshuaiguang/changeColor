import React,{ Component } from 'react';
class PageTwo extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	render(){
		return (
				<div>
					<span onClick={this.props.propsClick.bind(this,1)}>子组件触发父组件的事件{this.state.value}</span>
				</div>
			)
	}
}
export default PageTwo