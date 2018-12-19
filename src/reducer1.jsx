const defaultState = {headerValue:0};
const reducer1 = (state=defaultState,action)=>{
	let headerValue =  state.headerValue
	switch (action.type){
		case 'header1' :
		headerValue = headerValue + 10;
		console.log('header1')
		return {...state,headerValue}
		case 'DECREMENT1' :
		state.count -= 1;
		return state
		default:
		return state;
	}
}
export default reducer1;