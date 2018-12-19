import React ,{ Component } from 'react';
import PropTypes from 'prop-types'
class HeaderSon extends Component {
	constructor(props,context){
		super(props,context)
		console.log(context)
	}
	  componentWillUpdate(nextProps,nextState,nextContext){
    console.log(nextContext)
  }
	render(){
		return (
			<div  style={this.props.green?{color:this.props.green}:{}}>
				headerSon{this.context.headContext}{this.context.context1}
			</div>

			)
	}
}
HeaderSon.contextTypes={
	context1:PropTypes.string,
	headContext:PropTypes.string
}
export default HeaderSon;