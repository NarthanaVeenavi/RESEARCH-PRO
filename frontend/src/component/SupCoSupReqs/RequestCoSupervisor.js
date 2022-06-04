import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import React from "react";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const RequestCoSupervisor = () => {
  const [validated, setvalidated] = useState(false);
  const [groupID, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [researchField, setResearchField] = useState("");
  const [coSupervisorName, setcoSupervisorName] = useState("");

  const checkSubmit = (event) => {
    const CoSupRequest = {
      groupID: groupID,
      groupName: groupName,
      researchField: researchField,
      co_supervisorName: coSupervisorName,
      status: "Pending",
    };

    const reqForm = event.currentTarget;
    if (reqForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/cosup/request", CoSupRequest)
        .then(() => alert("Success!"))
        .catch((err) => alert("Failed!"));
    }
    setvalidated(true);
  };

  return (
    <div
     
    >
      <StudentSideNavBar />
      <center>
        <h2 style={{ color: "white" }}>Request a Co-Supervisor</h2>
      </center>

      <div className="topicregform">
        <Form noValidate validated={validated} onSubmit={checkSubmit}>
          <Form.Group className="mb-3" controlId="gid">
            <Form.Label>Group ID</Form.Label>
            <Form.Control
              placeholder="Group ID"
              value={groupID}
              onChange={(e) => setGroupId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gname">
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="supname">
            <Form.Label>Co-Supervisor Name</Form.Label>
            <Form.Control
              placeholder="Co-Supervisor Name"
              value={coSupervisorName}
              onChange={(e) => setcoSupervisorName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="topic">
            <Form.Label>Research Field</Form.Label>
            <Form.Control
              placeholder="Research Field"
              value={researchField}
              onChange={(e) => setResearchField(e.target.value)}
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
  );
};

export default RequestCoSupervisor;
