const defaultState = {count:15,showtips:false,testNum:1};
const reducer = (state=defaultState,action)=>{
	// const count = state.count
	switch (action.type){
		case 'INCREMENT' :
		console.log("INCREMENT")
		state.count = state.count + 1;
		state.showtips =  true
		// console.log(state)
		// return  state
		return  {...state}
break;
		case 'DECREMENT' :
		state.count -= 1;
		state.showtips =  false
		return {...state}
		default:
		return state;
	}
}
export default reducer;