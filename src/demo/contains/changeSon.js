import React,{ Component } from 'react';
import { object} from './object'
class ChangeSon extends Component {
	constructor(props){
		super(props)
		this.onClickNext = this.onClickNext.bind(this);
		this.putGenerator = this.putGenerator.bind(this)
		this.state={
			Generator:'',
			arr1:[11,2,3],
			arr2:['001','008','008']
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(this.props)
		console.log(nextProps)
	}
	componentWillMount(){
		this.setState({
			Generator:this.putGenerator()
		})
		let args= '';
		console.log([...{0:1,1:2,length:3}])
		console.log([...'foo'])

		let obj = {}
		var sym1 = Symbol()
		obj[sym1] = 'hello'
		// let obj = {
		// 	[sym1]:1
		// }
		console.log(obj[sym1])
		var sym1 = Symbol()
		obj[sym1] = 'world'
		obj[Symbol('prom')] = 'prom'
		console.log(obj)

		console.log(object)
		object[Symbol('new')] = 'hello'
		object.name='peer'
		console.log(object)
		console.log(Object.getOwnPropertyNames(object))	
		console.log(Reflect.ownKeys(object))
		console.log(Object.getOwnPropertyDescriptors(object,'name'))
		console.log(Object.getOwnPropertyDescriptor(object,'name'))
		// console.log(Object.prototype.toString())


		var obj1 = {
			fn(){
				console.log(1)
			}
		}
		var obj2={name:1,[Symbol()]:2};
		Object.assign(obj2,obj1)
		console.log(obj2)
		console.log(obj2.__proto__)
		console.log(obj2.toString())
		console.log(obj2.__proto__.hasOwnProperty('toString'))
		console.log(obj2.hasOwnProperty('toString'))
		// console.log(obj2.hasOwnProperty([Symbol()]))
		console.log(Object.prototype.hasOwnProperty.call(obj2.__proto__, 'toString'))
		// console.log(Object.hasOwnProperty())
		console.log(Object.getOwnPropertyNames(obj2.__proto__))
		var obj4 = Object.create({name:1})
		console.log(obj4.__proto__.name)
		var s = "name"
		console.log(obj4[s])

	}
	componentDidMount(){
		
	}
	putGenerator(){
		function*generator(){
			// yield 'hello';
			// yield 'world';
			// return 'end1';
			// return 'end2';
			console.log('Hello')
			// yield console.log('wedfj9r034wrj90jf0w9oje9ow')
		}
		let gen = generator();
		return gen
	}
	onClickNext(e){
		e.persist();
		console.log(e)
		console.log(e.target)
		let gen = this.state.Generator.next()
		console.log(gen)
	}
	componentWillUpdate(){
		console.log('son')


		setTimeout(()=>{
			console.log('1')
		},0)
		new Promise((resolve,reject)=>{
			for( let i=0; i<10;i++ ){
				i==9&&resolve()
			}
			// setTimeout(()=>{
			// 	resolve()
			// }, 0)
			console.log(2)
		})	
		.then((res)=>{
			console.log(3)
		})
		console.log(4)
	}
	changeState(){
		// 深拷贝
		let arrTmp = this.state.arr1;
		arrTmp[1] = 999
		setTimeout(()=>{
			console.log(this.state.arr1)
		}, 0)
	}
	changeState2(){
		
		this.setState({
			arr2:['00','0099','008']
		})
	}
	render(){
		return (
			<React.Fragment>
			<div onClick={this.onClickNext}>
				{ this.props.name }
			</div>
				<div onClick={this.changeState.bind(this)}>
					{ this.state.arr1.map((item)=>item) }
				</div>
				<div onClick={this.changeState2.bind(this)}>
					{ this.state.arr2.map((item)=>item) }
				</div>
			</React.Fragment>
			)
	}
}
export { ChangeSon }