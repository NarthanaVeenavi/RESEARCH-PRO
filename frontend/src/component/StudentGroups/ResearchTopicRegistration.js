import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";
import { useNavigate } from "react-router";

const ResearchTopicRegistration = () => {
  const [validated, setvalidated] = useState(false);
  const [gid, setGroupId] = useState("");
  const [gname, setGroupName] = useState("");
  const [topic, setResearchTopic] = useState("");
  const [supname, setSupName] = useState("");
  const [cosupname, setCoSupName] = useState("");

  const checkSubmit = (event) => {
    const newRegTopic = {
      groupID: gid,
      groupName: gname,
      topic: topic,
      supervisorName: supname,
      cosupervisorName: cosupname,
      status: "Pending",
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/topic/add", newRegTopic)
        .then(() =>
          alert("Success!"),
          navigate('/studentsub')
        )
        .catch((err) => alert("Failed!"));
    }
    setvalidated(true);
  };

  const navigate = useNavigate();

  return (
    <div
     
    >
      <StudentSideNavBar />
      <div style={{ marginLeft: "200px" }}>
        <center>
          <h2>Register Research Topic</h2>
        </center>

        <div className="topicregform">
          <Form noValidate validated={validated} onSubmit={checkSubmit}>
            <Form.Group className="mb-3" controlId="gid">
              <Form.Label>Group ID</Form.Label>
              <Form.Control
                placeholder="Group ID"
                value={gid}
                onChange={(e) => setGroupId(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gname">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                placeholder="Group Name"
                value={gname}
                onChange={(e) => setGroupName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="supname">
              <Form.Label>Supervisor Name</Form.Label>
              <Form.Control
                placeholder="Supervisor Name"
                value={supname}
                onChange={(e) => setSupName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cosupname">
              <Form.Label>Co-supervisor Name</Form.Label>
              <Form.Control
                placeholder="Co-supervisor Name"
                value={cosupname}
                onChange={(e) => setCoSupName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="topic">
              <Form.Label>Research Topic</Form.Label>
              <Form.Control
                placeholder="Research Topic"
                value={topic}
                onChange={(e) => setResearchTopic(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ResearchTopicRegistration;
