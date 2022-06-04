import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";

const SubmissionTypes = ({ upload }) => {
  const [validated, setvalidated] = useState(false);
  const [link, setName] = useState(upload != null ? upload.link : "");
  const [SubmissionType, setType] = useState(
    upload != null ? upload.SubmissionType : ""
  );
  const [date, setDate] = useState(upload != null ? upload.date : "");
  const [Time, setTime] = useState(upload != null ? upload.Time : "");

  const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const onSubmit = (event) => {
    const submissionType = {
      link: link,
      SubmissionType: SubmissionType,
      Date: date,
      Time: Time,
      Status: "Not attempted",
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (upload == null) {
        axios
          .post("http://localhost:5000/subtype/add", submissionType)
          .then(() => alert("You posted a link"))
          .catch((err) => alert(err));
        console.log(submissionType);
      } else {
        axios
          .put(`http://localhost:5000/subtype/update/${upload._id}`, submissionType)
          .then(() => alert("Link is Updated"))
          .catch((err) => alert(err));
      }
    }
    setvalidated(true);
  };

  return (
    <div
      
    >
      <AdminSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <Modal.Dialog className="cp6">
          <Modal.Header>
            <Modal.Title>Create Submission Types</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form noValidate validated={validated}>
              <Form.Group className="mb-3">
                <Form.Label>Submission Link Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={link}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter Name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Submission Types</Form.Label>
                <Form.Select
                  value={SubmissionType}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" selected disabled hidden>
                    Select
                  </option>
                  <option>Topic Assessment form</option>
                  <option>Proposal Document</option>
                  <option>Presentation slides</option>
                  <option>Final Thesis</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Select One
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Date"
                  min={disablePastDays()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter Date
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Due Time</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Time"
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter Time
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>
              {upload != null ? "Done" : "Submit"}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default SubmissionTypes;
