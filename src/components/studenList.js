import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudents,
  deleteStudent,
  deleteRow,
} from "../store/actions/studentAction";
import { Table, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const StudentList = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const studentListData = useSelector((state) => state.studentList);
  const { error, Students } = studentListData;

  const history = useHistory();
  // const nextPath = (path) => {
  //   history.push(path);
  // };

  const deleteStudentRow = (id) => {
    dispatch(deleteRow(id));
  };

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{t("Name.1")}</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {error
            ? error.message
            : Students.map((student) => (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td> {student.student_name}</td>

                  <td>
                    <Button
                      onClick={() => history.push(`/edit/${student.id}`)}
                      outline
                      color="info"
                    >
                      {/* Edit */} {t("EditButton.1")}
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteStudentRow(student.id)}
                      outline
                      color="danger"
                    >
                      {/* Delete */} {t("DeleteButton.1")}
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};
export default StudentList;
