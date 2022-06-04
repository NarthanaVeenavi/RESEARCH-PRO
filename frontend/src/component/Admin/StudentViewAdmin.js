import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleStudentDelete from "./DeleteStudent";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";
import ModalnewStudent from "../Student/UpdateStudent";
import axios from "axios";

const StudentViewAdmin = () => {
 
  const [DeleteStudent, setDeleteStudent] = useState(false);
  const [DeleteStudentView, setDeleteStudentView] = useState(false);
  const [StudentUpdate, setStudentUpdate] = React.useState(false);
  const [EditStdentView, setEditStdentView] = useState(false);
  const [AdminStudentViews, setAdminStudentView] = useState([]);

  useEffect(() => {
    const getAdminStudentViews = () => {
      axios
        .get("http://localhost:5000/student")
        .then((res) => {
          setAdminStudentView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAdminStudentViews();
  });

  return (
    <div
     
    >
      <AdminSideNavBar />
      <div className="stable">
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Students</h1>
        </center>
        <hr></hr>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No.</th>
              <th>Faculty</th>
              <th>User Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {AdminStudentViews.map((StudentView) => (
            <tbody key={StudentView._id}>
              <tr>
                <td>{StudentView.ID}</td>
                <td>{StudentView.email}</td>
                <td>{StudentView.firstName}</td>
                <td>{StudentView.lastName}</td>
                <td>{StudentView.contactNo}</td>
                <td>{StudentView.faculty}</td>
                <td>{StudentView.role}</td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaPencilAlt
                        onClick={() => {
                          setStudentUpdate(true);
                          setEditStdentView(StudentView);
                        }}
                        style={{ cursor: "pointer", color: "blue" }}
                        title="Update the student details"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaTrash
                        onClick={() => {
                          setDeleteStudent(true);
                          setDeleteStudentView(StudentView);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete the student"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <ModalnewStudent
          show={StudentUpdate}
          onHide={() => setStudentUpdate(false)}
          profile={EditStdentView}
        />

        <ModleStudentDelete
          show={DeleteStudent}
          onHide={() => setDeleteStudent(false)}
          DeleteStudentView={DeleteStudentView}
        />
      </div>
    </div>
  );
};

export default StudentViewAdmin;
