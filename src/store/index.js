// import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
// //import counterReducer from '../features/counter/counterSlice';
// import * as reducers from "./reducers";
// import counter from "./reducers/counter";

// // export default configureStore({
// //   reducer: combineReducers({
// //       ...reducers
// //     })
// // });
// const rootReducer = combineReducers({
//   counter,
// });

// const store = createStore(rootReducer);

// export default rootReducer;
// import {combineReducers} from "redux"
// import studentReducer from "./studentReducer"
// export default combineReducers({
//     studentList:studentReducer
// })



import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'

const initalState = {

}

const middleware = [thunk]

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;