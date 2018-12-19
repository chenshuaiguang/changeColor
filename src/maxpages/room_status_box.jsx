import React , {Component} from 'react';
import RoomStatusCell from './room_status_cell';
class Cellbox extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="room_show_cell clear_float">
				{
					this.props.numberArr.map((value,index)=> <RoomStatusCell key={index} val={value}/>) 
				}
			</div>
		)
	}
}

export default Cellbox;