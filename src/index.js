import React from 'react';
import ReactDOM from 'react-dom';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware,createStore,compose  } from 'redux';
import { Provider,connect } from 'react-redux'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'
import reducer1 from './reducer1'
import {demoReducer} from './demo/demoReducer'
import { BrowserRouter } from 'react-router-dom'
import './asset/css/iconfont.eot';
import './asset/css/iconfont.svg';
import './asset/css/iconfont.ttf';
import './asset/css/iconfont.woff';
import './asset/css/reset.css';
import 'antd/dist/antd.less'
import './asset/css/room_status.css';
import './asset/css/commonColor.css';
// import './asset/css/test.less';

// import 'semantic-ui-css/semantic.min.css';

import App from './App';
// import AppIndex from './AppIndex';
import registerServiceWorker from './registerServiceWorker';



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const reducerz = combineReducers({
//   reducer,
//   reducer1,
//   demoReducer
// })
// const storeEnhancers = compose(
// 	applyMiddleware(thunk)
//     (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
// );
// const store = createStore(reducerz,composeEnhancers(
//     applyMiddleware(thunk)
//   ));
ReactDOM.render(
	// <Provider store={store}>
	// <BrowserRouter><AppIndex props='1'/></BrowserRouter>
	// </Provider>
	<BrowserRouter>
	<App />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
