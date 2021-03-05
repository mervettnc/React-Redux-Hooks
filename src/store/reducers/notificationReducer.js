import { ADD_NOTIFICATION, DELETE_NOTIFICATION, EDIT_NOTIFICATION } from "../types";

const initialState = {
  message: "",
};



export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, message: action.payload };
    case EDIT_NOTIFICATION:
      return { ...state, message: action.payload };
case DELETE_NOTIFICATION:
  return{
    ...state,message:action.payload
  }
    default:
      return state;
  }
}
