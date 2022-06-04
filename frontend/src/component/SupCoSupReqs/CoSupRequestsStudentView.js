import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const CoSupRequestsStudentView = () => {
  const [cosupervisors, setCoSupervisor] = useState([]);

  useEffect(() => {
    const getCoSupervisors = () => {
      axios
        .get("http://localhost:5000/cosup")
        .then((res) => {
          setCoSupervisor(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getCoSupervisors();
  });

  return (
    <div
      
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3 style={{ color: "white" }}>Co-Supervisor Requests </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Field</th>
                <th>Co-Supervisor Name</th>
              </tr>
            </thead>
            {cosupervisors.map((cosupervisor) => (
              <tbody key={cosupervisor._id}>
                <tr>
                  <td>{cosupervisor.groupID}</td>
                  <td>{cosupervisor.groupName}</td>
                  <td>{cosupervisor.field}</td>
                  <td>
                    {cosupervisor.co_supervisorName}{" "}
                    <Badge bg="warning">{cosupervisor.status}</Badge>{" "}
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

export default CoSupRequestsStudentView;
