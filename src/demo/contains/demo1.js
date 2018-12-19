import React , { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Greet } from './function'
import { ChangeProps } from './ChangeProps'
import { ChangeSon } from './changeSon'
class Demo1 extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'1'
		}
	}
	componentWillMount(){
		let getKey = ()=> (new Promise(function(resolve,reject){
						if(true){
							resolve('value')
						}
				}))
		let getToken = (key)=> (new Promise(function(resolve,reject){
						if(true){
							let str = key+'1'
							resolve(str)
						}
				}))
		// getKey().then((respone)=>{
		// 	return getToken(respone)
		// }).then((respone)=>{
		// 	console.log(respone)
		// })


		// async function main(){
		// 	let key1 = await getKey();
		// 	let token = await getToken(key1)
		// 	console.log(token)
		// }
		// main()
		// console.log('提前')



	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}
	// shouldComponentUpdate(nextProps,nextState){
	// 	return nextState.name !== this.state.name
	// }
	nextMethods(){
		const getGenerator = function*(){
			yield 'hello';
			yield 'world';
		}
		return getGenerator
	}
	clickOpen(){
		const action={
			data:true
		}
		this.props.open(action)
	}
	closeOpen(){
		const action={
			data:false
		}
		this.props.close(action)
	}
	changeProps(){
		this.setState({
			name:'2'
		})
	}
	// shouldComponentUpdate(nextProps,nextState){
	// 	let b = nextState.name===this.state.name;
	// 	console.log(b)
	// }
	componentWillUpdate(){
		console.log('update')
	}
	showModal(){
		let div = document.getElementsByClassName('box')[0]
		const component = React.createElement('div',{name:1},'总个数')
		ReactDOM.render(component, div)
	}
	render(){
		return (
			<div>
				我是demo1<Greet />
				{ this.props.demoprops1 &&<span>Open</span>}
				<span onClick={this.clickOpen.bind(this)}>
					打开
				</span>
				<span onClick={this.closeOpen.bind(this)}>
					关闭
				</span>
				<div onClick={this.changeProps.bind(this)}>
					点击改变props
				</div>
				<ChangeProps name='props +ChangeProps'/>
				<ChangeSon  name='changeson'/>
				<div onClick={this.showModal.bind(this)}>	
					showModal
				</div>
			</div>
			)
	}
}
function mapStateToProps(state,ownProps){
	return {
		demoprops1:state.demoReducer.open
	}
}
const mapDispatchToProps = (dispatch)=>({
		open:(action)=>{
			dispatch(actions.Demo_open1(action))
		},
		close:(action)=>{
			dispatch(actions.Demo_close1(action))
		}
	})
export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Demo1)