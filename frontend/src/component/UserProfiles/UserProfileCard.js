import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { MdPermIdentity } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { MdHolidayVillage } from "react-icons/md";

const Profile = ({ profile }) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [profileInfo, setprofileInfo] = useState([]);

  useEffect(() => {
    if (token.role == "Student") {
      axios
        .get(`http://localhost:5000/student/students/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setprofileInfo(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else if (token.role == "Admin") {
      axios
        .get(`http://localhost:5000/Admin/admins/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setprofileInfo(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    } else {
      axios
        .get(`http://localhost:5000/staff/staffs/${token.email}`)
        .then((res) => {
          console.log(res.data.data);
          setprofileInfo(res.data.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    }
  }, []);

  return (
    <div>
      <div>
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>
              {profileInfo.firstName} {profileInfo.lastName}
            </Card.Title>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <MdPermIdentity /> {profileInfo.ID}
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <FaEnvelope /> {profileInfo.email}
          </Card.Body>
        </Card>
        {token.role == "Admin" ? (
          ""
        ) : (
          <Card>
            <Card.Body>
              <MdHolidayVillage /> {profileInfo.faculty}
            </Card.Body>
          </Card>
        )}
        {token.role == "Staff" ? (
          <Card>
            <Card.Body>
              <MdArticle /> {profileInfo.researchArea}
            </Card.Body>
          </Card>
        ) : (
          ""
        )}
        <Card>
          <Card.Body>
            <ImPhone /> {profileInfo.contactNo}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
