import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import PageOne from './pages/page1'
import PageTwo from './pages/page2'
import PageThree from './pages/page3'
import Login from './pages/Login'
import Register from './pages/register'
import Msg from './pages/message'
// import Star from './asset/images/beiz.svg'
import RouterOne from "./pages/routerone"
import { Radio,Input,Button,Row, Col,Select ,DatePicker,Layout, Menu, Breadcrumb, Icon ,Tabs,Popover} from 'antd';
const TabPane = Tabs.TabPane;
class Default extends Component {
  constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: this.props.open,
            login:true,
            arr1:[1,2,3],
            com:<PageThree />,
            visible: false,
            bol:null,
            ds:'1',
            arr:[{key:'1'},{key:'2'},{key:'3'},{key:'4'}],
            // testprops :'text123'
        };
        this.testprops = 'text123'
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
  enter=(x)=>{
    this.setState({
      bol:x.key
    })
  }
  leave=()=>{
    this.setState({
      bol:''
    })
  }
  // changeColor=()=>{
  //   const url = window.cssUrl.link1
  //    for(var i = 0;i< document.getElementsByTagName('link').length;i++){
  //     if(document.getElementsByTagName('link')[i].getAttribute('href').includes('commonColor')){
  //       document.getElementsByTagName('link')[i].setAttribute('href',url)
  //     }
  //    }  
  // }
  changeProps=()=>{
    this.setState({ds :"dfdffd"})
    this.testprops  = "dfdssssffd"
  }
  gengerator=()=>{
   const p1 = new Promise(function(res,rej){
        setTimeout(function(){
          rej(new Error("p1error"))
          // res('p1success')
        },2000)
   }).catch(err=>console.log(err))
   const p2 = new Promise(function(res,rej){
    setTimeout(function(){
      res(p1)
    },1000)
    })
   p2
   .then((respone)=>console.log(respone))
   .catch(err=>console.log(err))

  //   const p3 = new Promise(function(res,rej){
  //     setTimeout(function(){
  //       res("p3")
  //     },3000)
  //   })
  //   Promise.all([p1,p2,p3]).then(([x,y,z])=>{
  //     console.log(x,y,z)
  //   })
  // const fn = function*(){
  //   let y;
  //    console.log(y=(yield 1)) ;
  // }
  // const gen = fn()
  // console.log(gen.next())
  // setTimeout(() => {
  //   // console.log(gen.next())
  //   gen.next()    
  // }, 3000);
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible:true });
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
      <div>
 <Button onClick={this}>Click test</Button>

         <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        // trigger="click"
        visible={this.state.visible}
        // onVisibleChange={this.handleVisibleChange}
      >
        <Button onClick={this.handleVisibleChange}>Click me</Button>
      </Popover>
        <div onClick={this.gengerator}>
        gengertorButton
        </div>
        <Tabs style={{position:'static'}}  defaultActiveKey="1" >
    <TabPane tab="Tab 1" key="1">   {/* <Icon component={Star} /> */}
        <Select defaultValue="lucy" getPopupContainer={triggerNode => triggerNode.parentNode}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>Disabled</Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select></TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
          	<div className="repair_room" style={{width:200,height:200}}>
					</div>
          <div onClick={this.changeColor}>
            changgeColor
          </div>
          <div onClick={this.changeProps}>
            点击
          </div>
          {/* <Icon component={Star} /> */}
        <Select defaultValue="lucy" getPopupContainer={triggerNode => triggerNode}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>Disabled</Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
        <Button type="primary" icon="search">11</Button>
        <DatePicker />
        <div className="gutter-example">
        <Row gutter={16} justify="end">
          <Col className="gutter-row" span={2}>
            <div className="gutter-box">
            </div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
        </div>
        <header>
          {
            // <img src={logo} className={style.App_logo} alt="logo" />
          }
          {this.state.com}
          <h1 >Welcome to React</h1>
        </header>
        <p onClick={(event)=> this.handleClick(2,event)} >
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
        <em>{this.state.text}</em>
        <em>{this.props.open}</em>
        {/* ddd={this.state.ds} */}
        <PageOne  propsText = {this.testprops} />
        <PageTwo propsClick={this.appPropsClick} />
        <PageTwo propsClick={this.appPropsClick} />
        <PageTwo propsClick={this.appPropsClick} />
        <PageThree></PageThree>
        {buttons}
        <Msg propsMsg={this.state.login}/>
        <RouterOne name="name"/>
        <Link to="/routeone2">home</Link>
        <Link to="/routetwo">home111</Link>
        <Link to = "/antddemo">antddemo</Link>
        <div>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </div>
        <div onClick={this.onclickMe.bind(this)}>
          点我
        </div>
        <div onClick={this.onclickMe1.bind(this)}>
          点我11111
        </div>
        {
          this.state.arr1.map((item)=>{
            return (
                <div>
                  {
                    item
                  }
                </div>
              )
          })
        }
          <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
        {this.state.arr.map((x)=>{
          return (<div className={this.state.bol === x.key?'red':''} onMouseEnter={()=>this.enter(x)} onMouseLeave={this.leave} style={{width:200,height:200,border:"1px red solid",position:"relative"}}>
          {this.state.bol === x.key&&<div style={{width:50,height:50,background:"green",position:"absolute",right:'-45px',top:0}}>
              
          </div>}
          </div>)
        })}
       
      </div>
    );
  }
}
Default.defaultProps={
  open:'哈哈'
}
export default Default;
