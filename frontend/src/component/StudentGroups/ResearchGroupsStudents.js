import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const ResearchGroupsStudents = () => {
  const [groups, setGroup] = useState([]);

  useEffect(() => {
    const getGroups = () => {
      axios
        .get("http://localhost:5000/group")
        .then((res) => {
          setGroup(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getGroups();
  }, []);

  return (
    <div
     
    >
      <StudentSideNavBar />

      <div style={{ marginLeft: "200px", marginRight: "10px" }}>
        <center>
          <h3 style={{ color: "white" }}>Research Project Groups </h3>
        </center>

        <Link to="/creategroups">
          <Button variant="outline-primary" style={{ marginLeft: "1100px" }}>
            Create New Group
          </Button>
        </Link>
        <hr style={{color : "white", marginLeft: "20px"}} />
        <br />

        <div className="grouptable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Leader's ID</th>
                <th>Leader's Name</th>
                <th>Email</th>
                <th>Member 2 ID</th>
                <th>Member 2 Name</th>
                <th>Member 3 ID</th>
                <th>Member 3 Name</th>
                <th>Member 4 ID</th>
                <th>Member 4 Name</th>
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group._id}>
                <tr>
                  <td>{group.groupID}</td>
                  <td>{group.leaderID}</td>
                  <td>{group.leaderName}</td>
                  <td>{group.email}</td>
                  <td>{group.member2ID}</td>
                  <td>{group.member2Name}</td>
                  <td>{group.member3ID}</td>
                  <td>{group.member3Name}</td>
                  <td>{group.member4ID}</td>
                  <td>{group.member4Name}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResearchGroupsStudents;
