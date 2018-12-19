import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
class ComponentTest extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
			component2133
		</div>
		)
	}
}
function mapStateToProps(state){
	return{
		headerValue:state.reducer1.headerValue
	}
}
function mapDispatchToProps(dispatch) {
  return {
    clickHeader: ()=>{dispatch( {type:'header1'})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ComponentTest)
