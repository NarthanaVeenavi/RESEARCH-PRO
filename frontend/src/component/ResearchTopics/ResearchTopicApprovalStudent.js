import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const ResearchTopicApprovalStudent = () => {
  const [ResearchResearchTopics, setTopic] = useState([]);

  useEffect(() => {
    const getResearchTopics = () => {
      axios
        .get("http://localhost:5000/topic")
        .then((res) => {
          setTopic(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getResearchTopics();
  });

  return (
    <div
     
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3>Research ResearchTopics </h3>
        </center>
        <br />

        <div className="topictable">
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Supervisor Name</th>
                <th>Co-Supervisor Name</th>
                <th>Research Topic</th>
              </tr>
            </thead>
            {ResearchTopics.map((ResearchTopics) => (
              <tbody key={ResearchTopics._id}>
                <tr>
                  <td>{ResearchTopics.grpID}</td>
                  <td>{ResearchTopics.grpName}</td>
                  <td>{ResearchTopics.supervisorName}</td>
                  <td>{ResearchTopics.cosupervisorName}</td>
                  <td>
                    {ResearchTopics.ResearchTopics} <Badge bg="warning">{ResearchTopics.status}</Badge>{" "}
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

export default ResearchTopicApprovalStudent;
