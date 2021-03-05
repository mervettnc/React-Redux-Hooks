import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../store/actions/studentAction";


import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AddStudent = ({ history }) => {
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addNewStudent = (student) => {
    console.log("tıklandı");
    dispatch(addStudent(student));
  };

  const submitNewStudent = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row d-flex flex-wrap mt-5">
      <div className="col-md-10">
        <div className="card ">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              {/* Add New Student / */}
              {t("AddForm.1")}
            </h2>
            <form onSubmit={submitNewStudent}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control  "
                  placeholder={t("PlaceHolder.1")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                onClick={() => addNewStudent(name)}
                className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
              >
                {/* ADD */}
                {t("AddButton.1")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddStudent;
