import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleStaffDelete from "./DeleteStaff";
import ModalnewStaff from "./UpdateStaff";
import axios from "axios";

const StaffViewAdmin = () => {
  
  const [DeleteAdminStaffView, setDeleteAdminStaffView] = useState(false);
  const [staffUpdate, setstaffUpdate] = React.useState(false);
  const [EditAdminStaffView, setEditAdminStaffView] = useState(false);
  const [DeleteStaff, setDeleteStaff] = useState(false);
  const [AdminStaffView, setAdminStaffView] = useState([]);

  useEffect(() => {
    const getAdminStaffView = () => {
      axios
        .get("http://localhost:5000/staff")
        .then((res) => {
          setAdminStaffView(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAdminStaffView();
  });

  return (
    <div
  >
      <AdminSideNavBar />
      <div className="stable">
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Staff</h1>
        </center>
        <hr></hr>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact No.</th>
              <th>Reserch Area</th>
              <th>Faculty</th>
              <th>User Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {AdminStaffView.map((AdminStaffView) => (
            <tbody key={AdminStaffView._id}>
              <tr>
                <td>{AdminStaffView.ID}</td>
                <td>{AdminStaffView.email}</td>
                <td>{AdminStaffView.firstName}</td>
                <td>{AdminStaffView.lastName}</td>
                <td>{AdminStaffView.contactNo}</td>
                <td>{AdminStaffView.researchArea}</td>
                <td>{AdminStaffView.faculty}</td>
                <td>{AdminStaffView.role}</td>

                <td>
                  <div>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaPencilAlt
                        onClick={() => {
                          setstaffUpdate(true);
                          setEditAdminStaffView(AdminStaffView);
                        }}
                        style={{ cursor: "pointer", color: "blue" }}
                        title="Update staff member details"
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
                          setDeleteStaff(true);
                          setDeleteAdminStaffView(AdminStaffView);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete the staff member"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <ModalnewStaff
          show={staffUpdate}
          onHide={() => setstaffUpdate(false)}
          profile={EditAdminStaffView}
        />

        <ModleStaffDelete
          show={DeleteStaff}
          onHide={() => setDeleteStaff(false)}
          DeleteAdminStaffView={DeleteAdminStaffView}
        />
      </div>
    </div>
  );
};

export default StaffViewAdmin;
