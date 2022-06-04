import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modalnew1 from "../Student/StudentModalEdit.js";
import Modalnew2 from "../Admin/StaffModalUpdate.js";
import Modalnew3 from "../Admin/UpdateAdmin.js";
import Profile from "./UserProfileCard.js";
import UserModalDelete from "../User/UserModalDelete";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Header from "../Home/Header.js";

const UserProfile = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("");
  const [studentType, setstudentType] = React.useState(false);
  const [staffType, setstaffType] = React.useState(false);
  const [adminType, setadminType] = React.useState(false);
  const [deleteType, setDeleteType] = React.useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const [profiledetails, setProfiledetails] = useState([]);
  useEffect(() => {
    if (token.type == "Student") {
      axios
        .get(`http://localhost:5000/student/students/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else if (token.role == "Admin") {
      axios
        .get(`http://localhost:5000/Admin/admins/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else {
      axios
        .get(`http://localhost:5000/staff/staffs/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setProfiledetails(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="uprofile">
        <center>
          <div className="wrapperprofile">
            <b>
              {" "}
              <i>
                <h2 style={{ color: "white" }}>USER PROFILE</h2>
              </i>
            </b>
            <br />

            <Profile profile={profiledetails.data} />
            <br />

            <Button
              style={{ width: "130px" }}
              variant="success"
              onClick={
                token.role == "Student"
                  ? () => setstudentType(true)
                  : token.role == "Staff"
                  ? () => setstaffType(true)
                  : () => setadminType(true)
              }
            >
              Update Details
            </Button>

            <Button
              style={{ width: "140px" }}
              variant="danger"
              onClick={() => {
                setModalDelete(true);
                setUserType("delete");
              }}
            >
              Delete Account
            </Button>
            <Button
              style={{ width: "130px" }}
              variant="primary"
              onClick={() => {
                setModalDelete(true);
                setUserType("logout");
              }}
            >
              Logout
            </Button>
            <br />
            <br />
            <Modalnew1
              show={studentType}
              onHide={() => setstudentType(false)}
              profile={profiledetails}
            />
            <Modalnew2
              show={staffType}
              onHide={() => setstaffType(false)}
              profile={profiledetails}
            />
            <Modalnew3
              show={adminType}
              onHide={() => setadminType(false)}
              profile={profiledetails}
            />

            <UserModalDelete
              show={deleteType}
              type={userType}
              onHide={() => setDeleteType(false)}
              profile={profiledetails}
            />
          </div>
        </center>
      </div>
    </>
  );
};

export default UserProfile;
