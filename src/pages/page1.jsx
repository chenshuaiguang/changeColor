import React,{ Component } from 'react';
import style from './page1.css'
// let styles={
// 	color:'red'
// }
class PageOne extends Component {
	constructor(props){
		super(props)
		this.state={
			value:this.props.pageOne,
			stateStyle:{
				color:'green'
			}
		}
		this.focus = this.focus.bind(this)
		this.clickSpan = this.clickSpan.bind(this)
	}
	change(event){
		this.setState({
			value:event.target.value.toUpperCase()
		})
	}
	focus(event){
		console.log(event.target)
	}
	clickSpan(event){
		this.refs.input.focus(event);
	}
	clickfn(x){
		console.log(x)
	}
	render(){
		return (
				<div className={style.App} style={this.state.stateStyle}>
					<input ref='input' value={this.state.value} onFocus={this.focus} onChange={ (event)=> this.change(event)}/>
					<span  onClick={this.clickSpan}>{this.state.value}</span>
					<span onClick={this.clickfn.bind(this,'中国世界')} >行间绑定this</span>
				</div>
			)
	}
}
PageOne.defaultProps={
	pageOne:'pageOne'
}
export default PageOne