import React,{Component} from 'react';
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import emitter from '../events';
import HeaderSon from './headerSon'
import ComponentTest from "../demo/contains/component"
import Demo1 from '../demo/contains/demo1'
class Headers extends Component{
	constructor(props){
		super(props);
    this.clicktab = this.clicktab.bind(this);
    this.state={
      msg:''
    }
	}
  clicktab(){
    console.log(this+1111111)
  }
  showModal(){
    let div = document.getElementsByClassName('box')[0]
    const component = React.createElement(ComponentTest,{name:1},'总个数')
    // let div1 = <div>1112323</div>
    // console.log(component)
    // return component
    // return div1
    ReactDOM.render(component, div)
    // return component
  }
  componentDidMount(){
    emitter.addListener('callMe',(msg)=>{
      this.setState({
        msg:msg
      })
    })
  }
  getChildContext(){
    return {
      headContext:'headContext'
    }
  }
	render(){
		const {headerValue,clickHeader } =this.props;
		return (

				<header className="room_status_header" onClick={clickHeader}>
          <Demo1 />
          <ComponentTest />
      <div className="room_status_top clear_float">
        <div className="hotel_name_date">

          <span style={{marginRight: 27+'px'}}>{this.state.msg}四季酒店{headerValue}</span>
          <span onClick={this.showModal.bind(this)}>营业日</span>
          <span>2018/02/20</span>
          <input type='checkbox' checked={false} />
        </div>
        <div className="msg_cell">
          <i className="icon iconfont red_icon">&#xe60b;</i>
          <i className="icon iconfont red_icon">&#xe61e;</i>
          <span className="user_name">james</span>
          <i className="icon iconfont red_icon">&#xe613;</i>
          <span className="drop_down_icon"></span>
        </div>
      </div>
     
      <nav className="room_status_nav clear_float">
        <div className="three_line">
          <i className="icon iconfont red_icon">&#xe60e;</i>
        </div>
        <div className="menu_btn_box clear_float">
          <div className="menu_btn_cell select_menu_btn_cell" onClick={this.clicktab()}>
            房态
          </div>
          <div className="menu_btn_cell">
            客单<HeaderSon style={{color:'red'}}/>
          </div>
          <div className="menu_btn_cell">
            销售
          </div>
          <div className="menu_btn_cell">
            账务
          </div>
          <div className="menu_btn_cell">
            报表
          </div>
          <div className="menu_btn_cell">
            设置
          </div>
        </div>
        <div className="search_box">
          <input className="search_input" type="text" name="" />
        </div>
      </nav>
    </header>
			)
	}
}
const callback = ()=>
	(dispatch)=>{
    // dispatch({type:'INCREMENT'});
		setTimeout(()=>{
		   dispatch( {type:'header1'})},1000)
		
	}
// const callback = function(){
//   return function (dispatch){
//     // dispatch({type:'INCREMENT'});
//     setTimeout(()=>{
//        dispatch( {type:'header1'})},1000)
    
//   }
// }
function mapStateToProps(state){
	console.log('headerstate')
	return {
		headerValue:state.reducer1.headerValue
	}
}
function mapDispatchToProps(dispatch) {
  return {
    clickHeader: () => {dispatch(callback());console.log(callback)}
  }
}
Headers.childContextTypes={
  headContext:PropTypes.string 
}
export default connect(
	mapStateToProps,
 mapDispatchToProps
	)(Headers)
// export default Headers