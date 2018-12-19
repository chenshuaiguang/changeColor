import React,{ Component } from 'react';
import RouterOneContent from './routerOneContent'
import RouterTwoContent from './routerTwoContent'
import {Switch,Route} from 'react-router-dom'
import AntdDemo from "./antdDemo"
class RouterOne extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	componentWillMount(){
		
		function fns({x=1}={}){
			console.log(x)
		}
		fns()
	}
	render(){
		return (
				<div>
					<Switch>
						<Route exact path='/routeone:number' component={RouterOneContent}></Route>
						<Route  path='/routetwo' component={RouterTwoContent}></Route>
						<Route  path='/antddemo' component={AntdDemo}></Route>
					</Switch>
				</div>
			)
	}
}
export default RouterOne