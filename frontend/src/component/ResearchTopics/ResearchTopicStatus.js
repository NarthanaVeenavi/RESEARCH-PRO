import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
import PanelSideNavBar from "../SideBars/PanelMemberSideNavBar";
import SubmitedTopics from "./SubmitedTopics";

const ResearchTopicStatus = () => {
  const [topics, setResearchTopic] = useState([]);

  useEffect(() => {
    const getResearchTopics = () => {
      axios
        .get("http://localhost:5000/researchTopic")
        .then((res) => {
          setResearchTopic(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getResearchTopics();
  });

  const btnClick = (id, value) => {
    if (value == 1) {
      const changeStatus = {
        status: "Accepted",
      };

      axios.put(`http://localhost:5000/researchTopic/update/${id}`, changeStatus)
      .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    } else if (value == 2) {
      const changeStatus = {
        status: "Rejected",
      };

      axios.put(`http://localhost:5000/researchTopic/update/${id}`, changeStatus)
        .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    } else {
      const changeStatus = {
        status: "Pending",
      };

      axios.put(`http://localhost:5000/researchTopic/update/${id}`, changeStatus)
        .then(() => navigate("/viewtopics"))
        .catch((err) => alert(err));
    }
  };

  const navigate = useNavigate();

  return (
    <div
      
    >
      <PanelSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h3>Research Topics </h3>
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
                <th>Accept</th>
                <th>Reject</th>
                <th>Reset</th>
              </tr>
            </thead>
            {topics.map((researchTopic) => (
              <tbody key={researchTopic._id}>
                <tr>
                  <td>{researchTopic.groupID}</td>
                  <td>{researchTopic.groupName}</td>
                  <td>{researchTopic.supervisorName}</td>
                  <td>{researchTopic.cosupervisorName}</td>
                  <td>
                    {researchTopic.topic} <Badge bg="warning">{researchTopic.status}</Badge>{" "}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      onClick={() => {
                        btnClick(researchTopic._id, 1);
                      }}
                    >
                      Accept
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        btnClick(researchTopic._id, 2);
                      }}
                    >
                      Reject
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => {
                        btnClick(researchTopic._id, 3);
                      }}
                    >
                      Reset
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>

        <hr style = {{color : "black", height: "3px"}} />
          <div className="doctable"> 
            <h4> Submitted  Documents</h4>
            <br />
            <SubmitedTopics />
          </div> 
      </div>
    </div>
  );
};

export default ResearchTopicStatus;
