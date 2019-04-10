import React,{ Component } from 'react';
import { Form, Icon, Input, Button ,Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
class AntdForm extends Component {
			constructor(props){
				super(props)
				this.err = this.err.bind(this)
				this.state={
					bol:false
				}
			}
	componentWillMount(){
		
	}	
	componentDidMount(){
		function* gener(x){
			var y = '1'+ (yield x + 2)
			console.log(y)
			return y
		}
		const generator = gener(1)
		console.log( generator.next())
		console.log( generator.next(23))
		console.log('before')
		this.props.form.validateFields((err, values) => {
			console.log(err);
			console.log(values)
		  });//此函数触发setState方法，导致组件重新渲染
	}
	err(fn){
		console.log(fn())
		return Object.keys(fn()).some(field => fn()[field])//一开始时返回的false，但是在componentDidMount中执行this.props.form.validateFields()
		//此时就又回返回true
	}
	onSelect(item){
		console.log(item)
		console.log(1111111)
	}
	click(item){
		console.log(item)
		console.log(222)
	}
	enter(e){
		this.setState({
			bol:true
			
		})
		// setTimeout(()=>{
		// 	console.log(this.state.bol)
		// },0)
		console.log('enter')
	}
	leave(e){
		this.setState({
			bol:false
		})
		console.log('leave')
	}
    test = async()=>{
		const a = await new Promise((res,rej)=>{
			setTimeout(()=>{
				res(20)
			},2000)
		});
		const b = a;
		console.log(b)
	}
	render(){
		// 表单输入的时候会重新渲染
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		// console.log(isFieldTouched('userName') )
		// console.log(getFieldError('userName'))
		const userNameError = isFieldTouched('userName') && getFieldError('userName');
		// console.log(userNameError)
		const passwordError = isFieldTouched('password') && getFieldError('password');
		return (
			<div>
			<Form onSubmit={this.handleSubmit}>
			<FormItem
			validateStatus={userNameError ? 'error' : ''}
			help={userNameError || ''}
				label="UserName"
				labelCol={{
					span:4
				}}
				wrapperCol={{
					span:16
				}}
			>
					{getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
			</FormItem>
			<FormItem
			 validateStatus={passwordError ? 'error' : ''}
			// validateStatus='error'
			label="pasword"
			>
			{getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your pas!' }],
          })(
					<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
			</FormItem>
			<FormItem>
				<Button
					type="primary"
					htmlType="submit"
					disabled={this.err(getFieldsError)}
				>
					Login
				</Button>
			</FormItem>
		</Form>
		<Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
		mode="inline"
		style={{ width: 256 }}
		onSelect={(item)=>this.onSelect(item)}
		onClick={(item)=>this.click(item)}
		selectable
      >
        {/* <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}> */}
          <Menu.Item  key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        {/* </SubMenu> */}
        <SubMenu onTitleClick={()=>{console.log("3333")}} key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
	  <div onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)} style={{width:200,height:200,background:'yellow',position:'relative'}}>	
			<p style={{width:220,padding:30,background:'red'}}>
			<span>zheshi yi</span> 
				</p>
			{this.state.bol&&<div style={{width:100,height:100,background:'green',position:"absolute",left:0,bottom:-90}}>
				</div>}
		</div>
		<div onClick={this.test}>
				<Button>
					test
				</Button>
		</div>
		</div>
			)
	}
}
export default Form.create()(AntdForm)