import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'alertifyjs/build/css/alertify.min.css';
import './i18next';

// import thunk from "redux-thunk"

// import { applyMiddleware, combineReducers, compose, configureStore, createStore } from "@reduxjs/toolkit";
// //import counterReducer from '../features/counter/counterSlice';
// //import * as reducers from "./reducers";
// import counter from "./store/reducers/counter"
// import studentReducer from  "./store/reducers/studentReducer"

// // // export default configureStore({
// // //   reducer: combineReducers({
// // //       ...reducers
// // //     })
// // // });
// const rootReducer = combineReducers({
//   counter,
//   studentReducer

// });

//const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Suspense fallback={(<div>Loading..</div>)}>
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
