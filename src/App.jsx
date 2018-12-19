import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
// import style from './App.css';
import PageOne from './pages/page1'
import PageTwo from './pages/page2'
import PageThree from './pages/page3'
import Login from './pages/Login'
import Register from './pages/register'
import Msg from './pages/message'
import AntdDemo from "./pages/antdDemo"
import RouterOne from "./pages/routerone"
import Default from "./default"
import { Radio,Input,Button,Row, Col,Select ,DatePicker,Layout, Menu, Breadcrumb, Icon } from 'antd';
import AntdForm from './pages/antdForm';
class App extends Component {
  constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: this.props.open,
            login:true,
            arr1:[1,2,3],
            com:<PageThree />
        };
        
        // ES6 类中函数必须手动绑定
        // this.handleClick = this.handleClick.bind(this);
    }
  componentDidMount(){
    console.log(PageThree)
  }
  handleClick(x,y){
    console.log(x)
    console.log(this.state)
  }
  appPropsClick(x){
    console.log(x)
    this.setState({
      value:'9999'
    })
  }
  LoginClick(){
    this.setState({
      login:false
    })
  }
  registerClick(){
    this.setState({
      login:true
    })
  }
  // 只有setstate时页面才会重新渲染，浅复制导致的state下的属性发生变化是不会使页面重新渲染的，必须通过setstate来触发页面渲染
  onclickMe(){
    console.log(this.state.arr1)
    let arrclone = this.state.arr1;
    arrclone[0] = 100
    setTimeout(()=>{
      console.log(this.state.arr1)
    },0)    
  }
  onclickMe1(){
    this.setState({
      login:false
    })
  }
  render() {
    const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout
    var buttons = null
    if(this.state.login){
      buttons = <Login clickLogin={this.LoginClick.bind(this)}/>
      console.log(buttons)
    }else {
       buttons = <Register clickRegister={this.registerClick.bind(this)}/>
    }
    return (
      <Switch>
        <Route exact path='/' component={Default}></Route>
        <Route exact path='/antddemo' component={AntdDemo}></Route>
        <Route exact path='/antdform' component={AntdForm}></Route>
      </Switch>
    );
  }
}
App.defaultProps={
  open:'哈哈'
}
export default App;
