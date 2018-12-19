import React,{ Component } from 'react';
class RouterOneContent extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	componentDidMount(){
		console.log(this.props.match)
		console.log(this.props.history)
		console.log(this.props.location)
		console.log([].slice.call({1:1,2:2,length:3}))
		console.log([...{1:1,2:2,length:3}])	
	}
	render(){
		return (
				<div>
					routeronecontent
				</div>
			)
	}
}
export default RouterOneContent