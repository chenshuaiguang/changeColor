import React,{ Component } from 'react'
// const arr = [];
class PageThree extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"aaaaaaa",
			// selectValue:3
			selectValue:[]
		}
	}
	change(event){
		this.setState({
			value:event.target.value.toUpperCase()
		})
	}
	selectChange(event){
		event.persist()
		console.log(event)
		const options = event.target.options;
		const selectedValue = [];
		for(var i in options){
			if(options[i].selected){
			selectedValue.push(options[i].value);
			}
		}
		this.setState({
			selectValue:selectedValue
		})
	}
	render(){
		return (
			<div>
				<textarea value={this.state.value} onChange={this.change.bind(this)}></textarea>
				<br/>
				{// 	<select value={this.state.selectValue
				// } onChange={this.selectChange.bind(this)}>
				}
				<select multiple={true} value={this.state.selectValue} onChange={this.selectChange.bind(this)}>
					<option value='1'>北京</option>
					<option value='2'>上海</option>
					<option value='3'>深圳</option>
				</select>
				<span>{this.state.selectValue}</span>
			</div>
			)
	}
}
export default PageThree