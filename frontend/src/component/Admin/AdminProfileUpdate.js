import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const StudentProEdit = ({ st_detail }) => {
  const [validated, setvalidated] = useState(false);
  const [Id, setId] = useState(st_detail.ID);
  const [firstname, setFirstName] = useState(st_detail.firstName);
  const [lastname, setLastName] = useState(st_detail.lastName);
  const [contactNo, setContactNo] = useState(st_detail.contactNo);

  const handleSubmit = (event) => {
    const editstudent = {
      ID: Id,
      firstName: firstname,
      lastName: lastname,
      contactNo: contactNo,
    };
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.put(`http://localhost:5000/admin/update/${st_detail._id}`, editstudent)
        .then(
          (data) => console.log(data),
          alert("Updated!")
        )
        .catch((err) => alert(err));
    }
    setvalidated(true);
  };

  return (
    <div className="editform">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="inputreg" controlId="iD">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control
            placeholder="Enter your Admin ID"
            value={ids}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="contactno">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            pattern="[0-9]{10}"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default StudentProEdit;
