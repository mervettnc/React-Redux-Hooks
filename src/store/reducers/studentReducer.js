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

const initialState = {
  Students: [],
  error: null,
  student: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        Students: action.payload,
      };

    case STUDENTS_ERROR:
      return {
        error: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        error: null,
      };

    case ADD_STUDENT_SUCCESS:
      console.log("reducer", action);
      return {
        ...state,
        error: null,
        Students: [action.payload, ...state.Students],
      };
    case ADD_STUDENT_ERROR:
      return {
        ...state,
        error: true,
      };

    case EDIT_STUDENT:
        console.log(action.payload);
      return {
        ...state,
        error: true,
      };
    case EDIT_STUDENT_SUCCESS:
      state.Students[state.Students.findIndex(item => item.id === action.payload.id)] = action.payload
    
      return {
        ...state,
        error: false
      };

    case EDIT_STUDENT_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_STUDENT_EDIT:
      return {
        ...state,
        error: null,
      };

    case GET_STUDENT_EDIT_SUCCESS:
      return {
        ...state,
        error: null,
        student: action.payload,
      };
    case GET_STUDENT_EDIT_ERROR:
      return {
        ...state,
        error: null,
      };

      case DELETE_STUDENT:        
        return{
       ...state,
        Students:state.Students.filter(item=>item.id !== action.payload),
        
       
        }
    default:
      return state;
  }
}
