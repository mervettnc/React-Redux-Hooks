// import counter from './counter'
// import studentReducer from './studentReducer'

// export {
//     counter,
//     studentReducer
// }

import {combineReducers} from "redux"
import studentReducer from "./studentReducer"
 import counter from './counter'
 import notification from './notificationReducer';



export default combineReducers({
    studentList:studentReducer,
    counter,
    notification
})