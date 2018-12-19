import {
	Demo_Close,
	Demo_Open
} from './actionTypes'
 
export const demoReducer = (state={open:false,count:0},action)=>{
	switch (action.type){
		case Demo_Close :
		return {...state,open:action.data}
		break;
		case Demo_Open:
		return {...state, open:action.data}
		default:
		return state
	}
}