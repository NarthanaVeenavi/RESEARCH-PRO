import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";

const RequestSupervisor = () => {
  const [validated, setvalidated] = useState(false);
  const [grouID, setGroupId] = useState("");
  const [groupName, setGroupName] = useState("");
  const [field, setResearchField] = useState("");
  const [supervisorName, setsupervisorName] = useState("");

  const checkSubmit = (event) => {
    const SupervisorRequest = {
      groupID: grouID,
      groupName: groupName,
      field: field,
      supervisorName: supervisorName,
      status: "Pending",
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/sup/request", SupervisorRequest)
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
        <h2 style={{ color: "white" }}>Request a Supervisor</h2>
      </center>

      <div className="topicregform">
        <Form noValidate validated={validated} onSubmit={checkSubmit}>
          <Form.Group className="mb-3" controlId="gid">
            <Form.Label>Group ID</Form.Label>
            <Form.Control
              placeholder="Group ID"
              value={grouID}
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
            <Form.Label>Supervisor Name</Form.Label>
            <Form.Control
              placeholder="Supervisor Name"
              value={supervisorName}
              onChange={(e) => setsupervisorName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="topic">
            <Form.Label>Research Field</Form.Label>
            <Form.Control
              placeholder="Research Field"
              value={field}
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

export default RequestSupervisor;
