import { Demo_Close,Demo_Open } from './actionTypes.js'

export const Demo_open1 = (action)=>({
	type:Demo_Open,
	data:action.data
})
export const Demo_close1 = (action)=>({
	type:Demo_Close,
	data:action.data
	})
