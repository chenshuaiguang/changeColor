import React,{ Component } from 'react';
import emitter from '../events';
class Comp2 extends Component {
	constructor(props){
		super(props)
	}
	pul(){
		emitter.emit('callMe','触发callMe')
		const arr = [1,2,3,4,1,2,3,7,10];
		const newArr = [arr[0]];
		for(let item of arr){
			// var repeat = false;
			// for( let value of newArr){
			// 	if(value === item){
			// 		repeat = true;
			// 		break;
			// 	}
			// }
			// if(!repeat){
			// 	newArr.push(item)
			// }
			var bol = newArr.find((x)=>(x===item))
			if(!bol){
				newArr.push(item)
			}

		}
		console.log(newArr)
	}
	render(){
		return (
				<div onClick={ this.pul.bind(this) }>
					我是comp2
				</div>
			)
	}
}
export { Comp2 }