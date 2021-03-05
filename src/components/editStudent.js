
import React, { useEffect, useRef } from 'react';

import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getStudentAction , editStudentAction } from '../store/actions/studentAction';

import { useTranslation } from "react-i18next";
import i18next from "i18next";

 const EditStudent=()=> {

  const { t } = useTranslation();
  // function handleClick(lang) {
  //   i18next.changeLanguage(lang);
  // }

const nameRef= useRef('');
 const dispatch = useDispatch();
const editStudent=(id, student)=>dispatch(editStudentAction(id, student));

const students=useSelector((state)=>state.Students)
const student =  useSelector((state)=>state.studentList.student)


// const {id}=match.params;
const id = useParams().id;

const [editName,setEditName]= React.useState()
useEffect(() => {
  dispatch(getStudentAction(id))

}, [id]);

const EditName=e=>{
  setEditName(e.target.value)
}


const submitEditStudent=e=>{
    e.preventDefault();


editStudent(
    id,
    nameRef.current.value
    //name: 'asdf'
);

}

    return (
        <div className="row d-flex flex-wrap mt-5">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold ">
                {/* Edit Student */} {t('EditStudent.1')}
                </h2>
                <form onSubmit={submitEditStudent}>
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={EditName}
                      className="form-control  "
                      placeholder={student ? student.student_name : "Student Name"}
                      value={editName}
                      defaultValue={ student.student_name}
                     ref={nameRef}
                    />
                  </div>
                
                  <button type="submit"
                    
                    className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
                  >
                    {/* Save */} {t('SaveButton.1')}
                  </button>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      );
    };
    

    export default EditStudent