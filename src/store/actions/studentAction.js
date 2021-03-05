import {
  GET_STUDENTS,
  STUDENTS_ERROR,
  ADD_STUDENT,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_ERROR,
  EDIT_STUDENT,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_ERROR,
  GET_STUDENT_EDIT,
  GET_STUDENT_EDIT_SUCCESS,
  GET_STUDENT_EDIT_ERROR,
  DELETE_STUDENT,
} from "../types";
import { Addnotify, Deletenotify, Editnotify } from "./notificationAction";

import axios from "axios";
import alertify from "alertifyjs";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/api/student");
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: STUDENTS_ERROR,
      payload: error,
    });
  }
};

export const addStudent = (student) => async (dispatch) => {

  dispatch(newStudent());

  axios
    .post("http://localhost:3000/api/student", { student_name: student })

    .then((res) => {
      console.log(res);

      dispatch(addStudentSuccess(res.data));
      dispatch(Addnotify({
            text: student+ " başarıyla eklendi",
            tkey:'Add.1'
           }))
          
  
    })
    .catch((error) => {
      console.log(error);

      dispatch(addStudentError());
    });
};
export const newStudent = () => ({
  type: ADD_STUDENT,
});

export const addStudentSuccess = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student,
});

export const addStudentError = (error) => ({
  type: ADD_STUDENT_ERROR,
});

export const editStudentAction = (id, student) => {
  return (dispatch) => {
    dispatch(startEditStudent());
    axios
      .put(`http://localhost:3000/api/student/${id}`, { student_name: student })
      .then((res) => {
        dispatch(editStudentSuccess(res.data));
         dispatch(Editnotify({ text:student+" Başarıyla güncellendi",
         tkey:'Edit.1'}))
      })
      .catch((error) => {
        dispatch(editStudentError());
      });
  };
};

export const startEditStudent = () => ({
  type: EDIT_STUDENT,
});
export const editStudentSuccess = (student) => ({
  type: EDIT_STUDENT_SUCCESS,
  payload: student,
});
export const editStudentError = () => ({
  type: EDIT_STUDENT_ERROR,
});

// export const deleteStudent = (id) => ({
//   type: DELETE_STUDENT,
//   payload: id,
// });

export const deleteRow = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:3000/api/student/${id}`)
      .then(({ res }) => {
        dispatch({
          type: DELETE_STUDENT,
          payload: id,
        });
        dispatch(Deletenotify({ text:"Başarıyla silindi",
        tkey:'Delete.1'}))
      });
  };
};

export function getStudentAction(id) {
  return (dispatch) => {
    dispatch(getEditStudentAction());
    axios
      .get(`http://localhost:3000/api/student/${id}`)
      .then((res) => {
        dispatch(getStudentEditSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getStudentEditError());
      });
  };
}

export const getEditStudentAction = (id) => ({
  type: GET_STUDENT_EDIT,
});

export const getStudentEditSuccess = (student) => ({
  type: GET_STUDENT_EDIT_SUCCESS,

  payload: student,
});

export const getStudentEditError = () => ({
  type: GET_STUDENT_EDIT_ERROR,
});
