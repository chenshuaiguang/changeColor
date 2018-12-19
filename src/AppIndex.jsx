import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Cellbox from './maxpages/room_status_box';
// import { applyMiddleware,createStore } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea} from 'semantic-ui-react'
import Headers from './components/hearder';
import { Comp2 } from './components/comp2.js'
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk'
// import reducer from './reducer'
// import reducer1 from './reducer1'
// const reducerz = combineReducers({
//   reducer,
//   reducer1
// })
// const store = createStore(reducerz);
class AppIndex extends Component {
  constructor(props,context) {
        super(props,context);

        // 设置 initial state
        // this.state = {
        //     text: this.props.open,
        //     login:true,
        //     count:0
        // };
        this.state={
          x:0,
          y:500,
          day:0,
          bool:true,
          context1:"12323"
        }
        // ES6 类中函数必须手动绑定
        // this.handleClick = this.handleClick.bind(this);
    }
    getChildContext(){
      return {
        context1:this.state.context1,
        context2:'2',
        getData:this.getData.bind(this)
      }
    }
    getData(str){
        console.log('这是从子子组件中传来的信息'+str)
    }
  // listen(){
  //   console.log('ls')
  //   const newState = store.getState();
  //   this.setState(newState)
  // }
  // add(){
  //   // debugger
  //   console.log(1)
  //   store.subscribe(()=>this.listen())
  //   store.dispatch({type:'INCREMENT'})
  //   console.log(store)
  //   {// <div>
  //     //   <Cellbox numberArr={this.props.open}/>
  //     //   <div style={{color:'red',fontSize:50}} onClick={this.add.bind(this)}>+{store.getState().count}</div>
  //     // </div>
  //   }
  // }
  propsToSon(dispatch){
    dispatch({type:'INCREMENT'})
  }
  position(event){
    event.persist()
    console.log(event)
    var a = event.target
   while( !a.className.includes('float_box_small')){
        var a = a.offsetParent
    }
    console.log(a.offsetLeft)
    var bodyWidth = document.body.clientWidth;
    if(a.offsetLeft+220+315>bodyWidth){
        this.setState({
          x:a.offsetLeft-315-17,
          // y:a.offsetTop+1/2*a.offsetHeight
        })
    }else {
        this.setState({
          x:a.offsetLeft,
          // y:a.offsetTop+1/2*a.offsetHeight
        }) 
    }

    if(a.offsetTop+this.contentDiv.offsetHeight>this.contentDiv.scrollWidth){
        this.setState({
           // x: a.offsetLeft,
           y: a.offsetTop+1/2*a.offsetHeight-this.contentDiv.offsetHeight
        })
    }else {
        this.setState({
          // x:a.offsetLeft,
          y:a.offsetTop+1/2*a.offsetHeight
        }) 
    }

    
  }
  handleChange(e,{value}){
    console.log(value)
      this.setState({value})
  }
  // comb(){
  //     store.subscribe(()=>{
  //       const newState = store.getState();
  //        this.setState({
  //         day:newState.reducer.count
  //        })
  //     })
  //     store.dispatch({type:'INCREMENT'})
  //     console.log(store.getState())
  // }
  createHeader(x,props={'b':2}){
    const div = document.createElement("div")
    document.body.appendChild(div)
    const head = React.createElement('span',Object.assign(props,{'a':1}))
    ReactDOM.render(head,div)
  }
  componentDidMount(){
    this.createHeader()
  }
  // 通过改变state的状态，会使context自动更新，同时自动更新子子组件中引用的context
  global(){
    this.setState({
      context1:"context1"
    })
    console.log(this.context)
  }
  render() {
    var styleDiv={
      position: 'absolute',
      display: 'table',
      top:this.state.y,
      left:this.state.x,
      color: '#333333',
      zIndex: 20,
      fontSize: 12
    }
     const { value, showtips ,onIncreaseClick } = this.props
     const arr =[1,2,3,4]
     var bol = true
    return (
       <div className="wrap_box" onClick={ this.global.bind(this)}>
       <style>
        {
          // '.box{\
          //         color:green\
          //       }\
          // .box1{\
          //     border:1px red solid;\
          // }'
        }
        {
          `.box{
                            color:yellow
                          }
                    .box1{
                        border:1px red solid;
                    }`
        }
       </style>
       <div className={"box " + "box1"}>
        234
       </div>
      {<Headers propsToSon1={this.propsToSon.bind(this)} />}
    <div className="room_status_content">
      <div className={showtips?"common_tips up":"common_tips"}>
        <div className="common_tips_gou_icon">
          
        </div>
        <div>
          成功: 恭喜你成功预约
        </div>
      </div>
      <div className="left_side">
        <div className="left_side_wrap">
          <div className="left_search ">
            <input type="text" className="left_fixed_width" />
          </div>
          <div>
            {arr}
            <Button>我是</Button>
            <Form>
              <Form.Group inline>
                <label>Quantity</label>
                <Form.Field control={Radio} label='One' value='1' checked={this.state.value=== '1'} onChange={this.handleChange.bind(this)} error={bol}/>
                <Form.Field control={Radio} label='Two' value='2' checked={this.state.value === '2'} onChange={this.handleChange.bind(this)}/>
                <Form.Field control={Radio} label='Three' value='3' checked={this.state.value === '3'} onChange={this.handleChange.bind(this)}/>
              </Form.Group>
            </Form>
            {
            //   <div className="ui form">
            //   <div className="inline fields">
            //       <div className="field">
            //         <div className="ui radio checkbox">
            //           <input type="radio" name="fruit" checked="" tabindex="0" className="hidden" />
            //           <label>苹果</label>
            //         </div>
            //       </div>
            //       <div class="field">
            //         <div class="ui radio checkbox">
            //           <input type="radio" name="fruit" tabindex="0" class="hidden" />
            //           <label>橘子</label>
            //         </div>
            //       </div>
            //   </div>
            // </div>
          }
          </div>
          <div className="padding">
            <div className="room_status_search left_fixed_width">
             <Comp2 />
              <div className="search_title">
                按房态{  
                   this.state.bool &&<span style={{color:'red'}}>12</span>
                }
              </div>
              <div className="common_room_select_cell clear_float">
                <div className="select_roomstatus">
                  <span>全部</span>
                  <span>60</span>
                </div>
              </div>
              <div className="common_room_select_cell clear_float">
                <div >
                  <span className="empty_clean_bg"></span>
                  <span>空净</span>
                  <span>300</span>
                </div>
                <div >
                  <span className="empty_dirty_bg"></span>
                  <span>空脏</span>
                  <span></span>
                </div>
                <div >
                  <span className="live_clean_bg"></span>
                  <span>住净</span>
                  <span>30</span>
                </div>
                <div className="select_roomstatus">
                  <span className="live_dirty_bg"></span>
                  <span>住脏</span>
                  <span>30</span>
                </div>
                <div className="select_roomstatus">
                   <span className="repair_bg"></span>
                  <span>维修</span>
                  <span>30</span>
                </div>
                <div className="select_roomstatus">
                  <span className="icon iconfont left_red_icon">&#xe611;</span>
                  <span>锁房</span>
                </div>
              </div>
            </div>
          </div>
          <div className="padding">
            <div className="room_type_search left_fixed_width">
              <div className="search_title">
                按房型
              </div>
              <div className="common_room_select_cell clear_float">
                <div className="select_roomstatus">
                  <span>全部</span>
                  <span>20</span>
                </div>
              </div>
              <div className="common_room_select_cell clear_float">
                <div className="select_roomstatus">
                  <span>大床房</span>
                  <span>20</span>
                </div>
                <div className="select_roomstatus">
                  <span>标准大床</span>
                  <span>20</span>
                </div>
                <div>
                  <span>迪士尼房</span>
                </div>
                <div className="select_roomstatus">
                  <span>标准大床</span>
                </div>
              </div>
            </div>
          </div>
          <div className="padding">
            <div className="floor_search left_fixed_width ">
              <div className="search_title">
                按特征
              </div>
              <div>
                <select className="select_search">
                  <option value="">全部(60)</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="padding">
            <div className="floor_search left_fixed_width ">
              <div className="search_title">
                按联房团队
              </div>
              <div>
                <select className="select_search">
                  <option value="">
                    全部16
                  </option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
          </div>    
          <div className="padding">
            <div className="left_fixed_width">
              <div className="search_title">
                按标签
              </div>
              <div className="common_room_select_cell clear_float">
                <div className="select_roomstatus">
                  <span>全部</span>
                  <span>20</span>
                </div>
              </div>
              <div className="small_cell">
                <div className="small_title">
                客源类型
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="select_roomstatus">
                    <div className="icon_circle tag_cell_icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <span>散客</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <div className="icon_circle tag_cell_icon_circle">
                      <i className="icon iconfont">协</i>
                    </div>
                    <span>散客</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <span>散客</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <span>散客</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div className="tag_cell">
                <div className="small_title">
                入住类型
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="select_roomstatus">
                    <div className="icon_circle tag_cell_icon_circle">
                      <i className="icon iconfont">全</i>
                    </div>
                    <span>全天</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <span>散客2</span>
                  </div>
                  <div className="select_roomstatus">
                    <span>散客1</span>
                  </div>
                  <div className="select_roomstatus">
                    <span>散客2</span>
                  </div>
                </div>
              </div>
              <div className="tag_cell">
                <div className="small_title">
                占用信息
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="block_div clear_float">
                    <div className="di_div select_roomstatus">
                      <div className="tag_cell_icon_circle occupy_icon">
                        <i className="icon iconfont">&#xe639;</i>
                      </div>
                      <span>预抵</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="block_div clear_float">
                    <div className="di_div">
                      <div className="tag_cell_icon_circle occupy_icon">
                        <i className="icon iconfont">&#xe63a;</i>
                      </div>
                      <span>预离</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="block_div clear_float">
                    <div className="di_div">
                      <div className="tag_cell_icon_circle occupy_icon">
                        <i className="icon iconfont">&#xe637;</i>
                      </div>
                      <span>n天后预抵</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="block_div clear_float">
                    <div className="di_div">
                      <div className="tag_cell_icon_circle occupy_icon">
                        <i className="icon iconfont">&#xe638;</i>
                      </div>
                      <span>n天后预抵</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tag_cell">
                <div className="small_title">
                对客服务
                </div>
                <div className="common_room_select_cell clear_float">
                  <div className="select_roomstatus">
                    <div className="icon_circle icon_sr_font tag_cell_icon_circle">
                      <i className="icon iconfont">&#xe635;</i>
                    </div>
                    <span>生日</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <div className="icon_circle icon_sr_font tag_cell_icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <span>叫醒</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <div className="icon_circle icon_mian_font tag_cell_icon_circle">
                      <i className="icon iconfont">&#xe630;</i>
                    </div>
                    <span>免打扰</span>
                    <span>1</span>
                  </div>
                  <div className="select_roomstatus">
                    <div className="icon_circle icon_mian_font tag_cell_icon_circle">
                      <i className="icon iconfont">&#xe634;</i>
                    </div>
                    <span>免查询</span>
                    <span>1</span>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
      
      <div className="right_side">
        <div className="operate_bar" onClick={ onIncreaseClick } >
            <div className="function_side clear_float">
              <div className="function_side_cell clear_float">
                <div className="cell_float">
                  <i className="iconfont red_icon">&#xe612;</i>
                  <span className="cell_inline_span">预订{ value }</span>
                </div>
                <div className="cell_float">
                  <i className="iconfont red_icon">&#xe612;</i>
                  <span className="cell_inline_span">入住</span>
                </div>
                <div className="cell_float">
                  <i className="iconfont red_icon">&#xe612;</i>
                  <span className="cell_inline_span">会员</span>
                </div>
                <div className="cell_float">
                  <i className="iconfont red_icon">&#xe612;</i>
                  <span className="cell_inline_span">非住客账</span>
                </div>
              </div>
              <div className="function_side_cell clear_float">
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe610;</i>
                  <span className="cell_inline_span">置干净</span>
                </div>
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe60d;</i>
                  <span className="cell_inline_span">置脏</span>
                </div>
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe615;</i>
                  <span className="cell_inline_span">置维修</span>
                </div>
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe611;</i>
                  <span className="cell_inline_span">锁房</span>
                </div>
              </div>
              <div className="function_side_cell clear_float" style={{marginRight: 0}}>
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe60f;</i>
                  <span className="cell_inline_span">联房</span>
                </div>
                <div className="cell_float">
                  <i className="icon iconfont red_icon">&#xe632;</i>
                  <span className="cell_inline_span">团队</span>
                </div>
              </div>
              <div className="right_function_side_cell clear_float">
                <div className="all_select">
                  全选
                </div>
                <div className="set_icon">
                  <i className="icon iconfont red_icon">&#xe617;</i>
                </div>
                <div className="btn_room_status_count">
                  房态统计 <span></span>
                  <span ></span>
                </div>
              </div>
            </div>
            <div className="floor_side clear_float">
              <div className="floor_cell ">
                全部
              </div>
              <div className="floor_cell">
                一栋
              </div>
              <div className="floor_cell floor_cell_border">
                二栋
              </div>
            </div>
            <div className="floor_side clear_float">
              <div className="floor_cell ">
                全部
              </div>
              <div className="floor_cell">
                一层
              </div>
              <div className="floor_cell floor_cell_border">
                二层
              </div>
              <div className="floor_cell">
                三层
              </div>
            </div>
        </div>
        <div className="main_content" ref={(div)=>{this.contentDiv=div}}>
          <div style={styleDiv} ref={(div)=>{this.contentDiv=div}} className="contextmenu_div">
                <div className="left_div">
                  <ul className="left_ul">
                    <li className="left_common_li">
                      <div className="left_common_div">
                        详单
                      </div>
                      <div className="left_common_div">
                        账务
                      </div>
                      <div className="left_common_div">
                        日志
                      </div>
                    </li>
                    <li className="left_common_li">
                      <div className="left_common_div">
                        置脏
                      </div>
                      <div className="left_common_div">
                        置维修
                      </div>
                      <div className="left_common_div">
                        锁房
                      </div>
                    </li>
                    <li className="left_common_li">
                      <div className="left_common_div">
                        续住
                      </div>
                      <div className="left_common_div">
                        换房
                      </div>
                      <div className="left_common_div">
                        入账
                      </div>
                      <div className="left_common_div">
                        结账
                      </div>                      
                    </li>
                    <li className="left_common_li">
                      <div className="left_common_div">
                        制卡
                      </div>
                      <div className="left_common_div">
                        打印
                      </div>
                    </li>
                    <li className="left_common_li">
                      <div className="left_common_div">
                        加入联房
                      </div>
                      <div className="left_common_div">
                        加入团队
                      </div>
                    </li>
                    <li className="left_common_li" style={{position: 'relative'}}>
                      <div className="left_common_div">
                        <span style={{verticalAlign: 'middle'}}>9天内预订单</span>
                        <span className="down_icon"></span>
                      </div>
                      <div className="fold_div box_shadow">
                        <div className="order_info">
                          <div className="order_info_item clear_float">
                            <span>李四 11222222222222</span>
                            <div className="icon_box">
                              <div className="icon_circle icon_circle_mei icon_box_margin">
                                <i className="icon iconfont">美</i>
                              </div>
                              <div className="arrears_icon icon_box_margin"></div>
                              <i className="orange_icon icon iconfont icon_box_margin last_icon_box_margin">&#xe639;</i>
                            </div>  
                          </div>
                          <div className="order_info_item clear_float">
                            <span>04/24 - 08/25</span>
                            <div className="icon_box black_font">
                              <span>付款:</span>
                              <span>￥100.00</span>
                            </div>  
                          </div>
                        </div>
                        <div className="order_info">
                          <div className="order_info_item clear_float">
                            <span>李四 11222222222222</span>
                            <div className="icon_box">
                              <div className="icon_circle icon_circle_mei icon_box_margin">
                                <i className="icon iconfont">美</i>
                              </div>
                              <div className="arrears_icon icon_box_margin"></div>
                              <i className="orange_icon icon iconfont icon_box_margin last_icon_box_margin">&#xe639;</i>
                            </div>  
                          </div>
                          <div className="order_info_item clear_float">
                            <span>04/24 - 08/25</span>
                            <div className="icon_box black_font">
                              <span>付款:</span>
                              <span>￥100.00</span>
                            </div>  
                          </div>
                        </div>
                        <div className="order_info">
                          更多...
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="right_div">
                  <ul className="right_ul">
                    <li className="right_common_li">
                      <div className="booking_name">
                        <span>预订人</span>
                        <span>张三三</span>
                        <div className="icon_box">
                          <div className="icon_circle icon_circle_mei icon_box_margin">
                            <i className="icon iconfont">美</i>
                          </div>
                          <div className="arrears_icon icon_box_margin"></div>
                          <i className="orange_icon icon iconfont icon_box_margin last_icon_box_margin">&#xe639;</i>  
                        </div>  
                      </div>
                      <div className="time_box">
                        <div>
                          <span>预抵时间:</span>
                          <span>02/28 12:56</span>
                        </div>
                        <div>
                          <span>预离时间:</span>
                          <span>02/28 12:56</span>
                        </div>
                      </div>
                    </li>
                    <li className="right_common_li">
                      <div className="consume_item clear_float">
                        <span>消　费:</span>
                        <span>￥ 10.00</span>
                      </div>
                      <div className="consume_item clear_float">
                        <span>付　款:</span>
                        <span>￥ 10.00</span>
                      </div>
                      <div className="consume_item clear_float">
                        <span>预授权:</span>
                        <span>￥ 10.00</span>
                      </div>
                      <div className="consume_item clear_float">
                        <span>余　额:</span>
                        <span>￥ 10.00</span>
                      </div>
                    </li>
                    <li className="right_common_li">
                      <div className="customer_router">
                        <span>客　　源:</span>
                        <span>美团预付</span>
                      </div>
                      <div className="customer_router">
                        <span>渠　　道:</span>
                        <span>美团EBK</span>
                      </div>
                      <div className="customer_router">
                        <span>入住类型:</span>
                        <span>全天</span>
                      </div>
                      <div className="customer_router">
                        <span>对客服务:</span>
                        <span className="service_info">免打扰免打扰免打扰免打扰免打扰</span>
                      </div>
                    </li>
                    <li className="right_common_li">
                      <div className="customer_router">
                        <span style={{marginTop:4}}>备注:</span>
                        <textarea style={{width: 136,border: 'none',outline: 'none',resize: 'none',background: '#f7f7f7'}}></textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_small empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                </div>
                <div className="room_type empty_clean_color">
                  1标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_mei">
                      <i className="icon iconfont">美</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle icon_sr_font">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle icon_mian_font">
                      <i className="icon iconfont">&#xe630;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
            </div>
            <div onClick={(event)=>this.position(event)} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
            <div className="float_box_small empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
              <div className="select_cell">
                <div className="select_gou_icon">
                  <i className="icon iconfont">&#xe611;</i>
                </div>
              </div>
            </div>
            <div className="float_box_small live_clean">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
            </div>
            <div className="float_box_small live_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
            </div>
            <div className="float_box_small repair_room">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_yan_light">
                    <div className="right_icon_font right_icon_font_yan">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
            </div>
            <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
              <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
              <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
              <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
              <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
              <div onClick={(event)=>this.position(event)} ref={(div)=>{this.div=div}} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
          </div> 
          {
            arr.length&&
            <div className="room_show_cell clear_float">
             { arr.map((item,index)=>
                        <div key={index} className="float_box_middle live_dirty empty_clean_border">
                           <div className="float_box_content ">
                             <div>
                               <div className="room_number_default empty_clean_color">
                                 8101
                               </div>
                               <div className="red_background"></div> 
                             </div>
                             <div className="room_type empty_clean_color">
                               标准双人大床
                             </div>
                             <div className="guest_name empty_clean_color">
                               孙世林
                             </div>
                             <div className="icon_group">
                               <div className="left_group">
                                 <div className="icon_circle">
                                   <i className="icon iconfont">团</i>
                                 </div>
                                 <div className="icon_circle">
                                   <i className="icon iconfont">散</i>
                                 </div>
                                 <div className="icon_circle">
                                   <i className="icon iconfont">&#xe623;</i>
                                 </div>
                                 <div className="icon_circle">
                                   <i className="icon iconfont">&#xe621;</i>
                                 </div>
                               </div>
                               <div className="right_icon_default right_icon_light">
                                 <div className="right_icon_font">9</div>
                               </div>
                             </div>
                           </div>
                           <div className="post_mark">
                             <div className="post_mark_circle_default post_mark_circle_middle">
                               <span className="post_mark_font_default">
                                 联02
                               </span>
                             </div>
                             <div className="red_background">
                               
                             </div>
                           </div>
                        </div> 
                                 
                             ) }
            </div>
           }      
          
          <div className="room_show_cell clear_float">
            <div className="float_box_max live_dirty empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark">
                <div className="post_mark_circle_default post_mark_circle_big">
                  <span className="post_mark_font_default post_mark_font_big">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>                            
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
          <div className="room_show_cell clear_float">
            <div onClick={(event)=>this.position(event)} className="float_box_small empty_dirty">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default">
                    8101
                  </div>
                </div>
                <div className="room_type">
                  标准双人大床
                </div>
                <div className="guest_name">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle icon_circle_fei">
                      <i className="icon iconfont">飞</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
      
              <div className="post_mark">
                <div className="post_mark_circle_default">
                  <span className="post_mark_font_default">
                    联02
                  </span>
                </div>
                <div className="red_background">
                  
                </div>
              </div></div>
            <div className="float_box_max empty_clean empty_clean_border">
              <div className="float_box_content ">
                <div>
                  <div className="room_number_default empty_clean_color">
                    8101
                  </div>
                  <div className="red_background"></div> 
                </div>
                <div className="room_type empty_clean_color">
                  标准双人大床
                </div>
                <div className="guest_name empty_clean_color">
                  孙世林
                </div>
                <div className="icon_group">
                  <div className="left_group">
                    <div className="icon_circle">
                      <i className="icon iconfont">团</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">散</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe623;</i>
                    </div>
                    <div className="icon_circle">
                      <i className="icon iconfont">&#xe621;</i>
                    </div>
                  </div>
                  <div className="right_icon_default right_icon_light">
                    <div className="right_icon_font">9</div>
                  </div>
                </div>
              </div>
              <div className="post_mark_default post_mark_gray">
                <div className="team_icon">
                  联
                </div>
                <div className="team_or_unite_number">
                  02
                </div>
              </div>
            </div>                            
          </div>
      </div>
      </div>
    </div>
    <div className="footer">
      <div className="left_footer">
        <span>2项已选中:</span>
        <span>D8106, D8107</span>
      </div>
      <div className="remote_btn">
        远期房态
      </div>
      <div className="lived_btn selected_room_status_btn">
        实时房态
      </div>
    </div>
  </div>

    );
  }
}
AppIndex.defaultProps = {
  open:[1,2,3]
}
AppIndex.childContextTypes={
  context1:PropTypes.string,
  context2:PropTypes.string,
  getData:PropTypes.func
}
const callback = ()=>
  (dispatch)=>{
    dispatch({type:'INCREMENT'})
    setTimeout(()=>{
       dispatch({type:'DECREMENT'})
    }, 3000)
  
}
function mapStateToProps(state,ownProps) {
  console.log('indexstate')
  return {
    value: state.reducer.count,
    showtips:state.reducer.showtips,
    active:ownProps.props
  }
}

function mapDispatchToProps(dispatch,ownprops) {
  console.log( ownprops)
  return {
    onIncreaseClick: () => {
      dispatch(callback())
      }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIndex);


