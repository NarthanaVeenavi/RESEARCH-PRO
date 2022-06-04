import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const SupervisorRequestsStudentView = () => {
  const [supervisors, setSupervisor] = useState([]);

  useEffect(() => {
    const getSupervisors = () => {
      axios
        .get("http://localhost:5000/sup")
        .then((res) => {
          setSupervisor(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSupervisors();
  });

  return (
    <div
      
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3 style={{ color: "white" }}>Supervisor Requests </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Field</th>
                <th>Supervisor Name</th>
              </tr>
            </thead>
            {supervisors.map((supervisor) => (
              <tbody key={supervisor._id}>
                <tr>
                  <td>{supervisor.groupID}</td>
                  <td>{supervisor.groupName}</td>
                  <td>{supervisor.field}</td>
                  <td>
                    {supervisor.supervisorName} <Badge bg="warning">{supervisor.status}</Badge>{" "}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SupervisorRequestsStudentView;
