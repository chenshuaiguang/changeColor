import React,{ Component } from 'react' ;
class RoomStatusCell extends Component {
	constructor(props){
 		super(props);
		}
	render(){
		return (
				<div className="float_box_small empty_clean">
					<div className="float_box_content ">
						<div className="room_number_default">
							8101
						</div>
						<div className="room_type">
							标准双人大床{this.props.val}
						</div>
						<div className="guest_name">
							孙世林
						</div>
						<div className="icon_group">
							<div className="left_group">
								<div className="icon_circle">
									<i className="icon iconfont">&#xe614;</i>
								</div>
								<div className="icon_circle">
									<i className="icon iconfont">&#xe620;</i>
								</div>
								<div className="icon_circle">
									<i className="icon iconfont">&#xe623;</i>
								</div>
								<div className="icon_circle">
									<i className="icon iconfont">&#xe621;</i>
								</div>
							</div>
							<div className="right_group">
								<div className="right_icon">
									<div className="right_icon_font">9</div>
								</div>
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
				)
			}
		}
export default RoomStatusCell;