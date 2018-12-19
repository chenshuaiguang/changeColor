import React,{ Component } from 'react';
class ChangeProps extends Component {
	constructor(props){
		super(props)
		this.state={
			name:0
		}
	}
	componentDidMount(){
		// this.setState((prevState, props) => ({
  //           name: prevState.name + 20
  //       }));
		// this.setState((prevState, props) => ({
  //           name: prevState.name + 1
  //       }), () => {
  //           console.log(this.state.name); 
  //       });
  	this.setState({
			name:this.state.name+1
		})
		 console.log(this.state.name);
		this.setState({
			name:this.state.name+1
		})
		console.log(this.state.name);
		// this.setState({
		// 	name:this.state.name+1
		// })
		// setTimeout(()=>{
		// 	console.log(this.state.name)	
		// }, 100)	
	}
	componentWillReceiveProps(nextProps){
		console.log(this.props)
		console.log(nextProps)
	}
	componentWillUpdate(){
		console.log('changeupdate')
	}
	// shouldComponentUpdate(nextProps,nextState){
	// 	return false
	// }
	changeProps(){
		// this.setState({
		// 	name:'2'
		// })

		this.setState({
			name:this.state.name+1
		})
		 console.log(this.state.name);
		this.setState({
			name:this.state.name+1
		})
		 console.log(this.state.name);
		setTimeout(()=>{
			this.setState({
				name:this.state.name+1
			})
			 console.log(this.state.name);
			this.setState({
				name:this.state.name+1
			})
			 console.log(this.state.name);
		}, 0)	
		console.log('wzai settimeour ')
	}
	render(){
		return (
			<React.Fragment>
			<div style={{padding:'20px 0'}} onClick={this.changeProps.bind(this)}>
				{ this.props.name }
			</div>
			</React.Fragment>
			)
	}
}
export { ChangeProps }