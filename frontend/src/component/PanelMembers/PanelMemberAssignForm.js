import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const PanelMemberAssignForm = () => {
 
  const [grpID, setGroupId] = useState("");
  const [grpName, setGroupName] = useState("");
  const [panelMem1, setpanelMem1] = useState("");
  const [panelMem2, setpanelMem2] = useState("");
  const [topic, setResearchTopic] = useState("");
  const [validated, setvalidated] = useState(false);

  const checkSubmit = (event) => {
    const newPanelAssign = {
      groupID: grpID,
      groupName: grpName,
      panelmember1: panelMem1,
      panelmember2: panelMem2,
      topic: topic,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/panel/add", newPanelAssign)
        .then(() =>
          alert("Success!")
        )
        .catch((err) => alert("Failed!"));
    }
    setvalidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={checkSubmit}>
        <Form.Group className="mb-3" controlId="grpID">
          <Form.Label>Group ID</Form.Label>
          <Form.Control
            placeholder="Group ID"
            value={grpID}
            onChange={(e) => setGroupId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="grpName">
          <Form.Label>Group Name</Form.Label>
          <Form.Control
            placeholder="Group Name"
            value={grpName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="panelMem1">
          <Form.Label>Panel Member 1 Name</Form.Label>
          <Form.Control
            placeholder="Panel Member 1 Name"
            value={panelMem1}
            onChange={(e) => setpanelMem1(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="panelMem2">
          <Form.Label>Panel Member 2 Name</Form.Label>
          <Form.Control
            placeholder="Panel Member 2 Name"
            value={panelMem2}
            onChange={(e) => setpanelMem2(e.target.value)}
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

        <Button variant="outline-primary" type="submit">
          Assign
        </Button>
      </Form>
    </div>
  );
};

export default PanelMemberAssignForm;
