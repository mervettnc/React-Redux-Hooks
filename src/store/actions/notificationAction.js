import { ADD_NOTIFICATION, DELETE_NOTIFICATION, EDIT_NOTIFICATION } from "../types";

export const Addnotify = (message) => {
  return (dispatch) => {
    dispatch({
      type: ADD_NOTIFICATION,

      payload: message,
    });
  };
};

export const Editnotify = (message) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_NOTIFICATION,
      payload: message,
    });
  };
};

export const Deletenotify = (message) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_NOTIFICATION,
      payload: message,
    });
  };
};
