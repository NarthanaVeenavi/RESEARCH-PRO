import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const StaffProEdit = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [ID, setID] = useState(det.ID);
  const [firstname, setFirstName] = useState(det.firstName);
  const [lastName, setLastName] = useState(det.lastName);
  const [contactNo, setcontactNo] = useState(det.contactNo);
  const [researchArea, setresearchArea] = useState(det.researchArea);
  const [faculty, setFaculty] = useState(det.faculty);

  const handleSubmit = (event) => {
    const updateUser = {
      ID: ID,
      firstName: firstname,
      lastName: lastName,
      contactNo: contactNo,
      researchArea: researchArea,
      faculty: faculty,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .put(`http://localhost:5000/staff/update/${det._id}`, updateUser)
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
          <Form.Label>Staff ID</Form.Label>
          <Form.Control
            placeholder="Enter your staff ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
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

        <Form.Group className="inputreg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg" controlId="contactNo">
          <Form.Label>Contact No</Form.Label>
          <Form.Control
            pattern="[0-9]{10}"
            value={contactNo}
            onChange={(e) => setcontactNo(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="inputreg" controlId="interest">
          <Form.Label>Research Interest</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your research interest"
            value={researchArea}
            onChange={(e) => setresearchArea(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="inputreg">
          <Form.Label>Faculty</Form.Label>
          <Form.Select
            aria-label="Feedback Type"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          >
            <option selected disabled hidden>
              Faculty
            </option>
            <option>Select your faculty</option>
            <option>Computing</option>
            <option>Bussiness</option>
            <option>Engineering</option>
            <option>Humanaties and sciences</option>
            <option>School of Architecture</option>
            <option>Graduate studies and reseach</option>
            <option>School of Law</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default StaffProEdit;
