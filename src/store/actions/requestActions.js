
import * as notificationAction from "./notificationAction";

 const notify = ({ type='info',text,timeout} )=> {

if(!timeout){
    switch (type) {
        case info:
            timeout:3000
            break;
    case error :
        timeout:3000
        break;
        default:
            break;
    }
}

const notification={
type:type,
text:text,
timeout:timeout
};
return (dispatch)=>{
    dispatch(notificationAction.addNotification(notification));
   
}


}
export default notify