import React from "react";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMarkingScheme = () => {
  const [validated, setValidated] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [totMarks, settotMarks] = useState("");
  const [marking1, setmarking1] = useState("");
  const [mark1, setmark1] = useState("");
  const [marking2, setmarking2] = useState("");
  const [mark2, setmark2] = useState("");
  const [marking3, setmarking3] = useState("");
  const [mark3, setmark3] = useState("");
  const [marking4, setmarking4] = useState("");
  const [mark4, setmark4] = useState("");
  const [marking5, setmarking5] = useState("");
  const [mark5, setmark5] = useState("");
 

  const handleSubmit = (event) => {
    const newMarkingScheme = {
      name: name,
      totMarks: totMarks,
      marking1: marking1,
      mark1: mark1,
      marking2: marking2,
      mark2: mark2,
      marking3: marking3,
      mark3: mark3,
      marking4: marking4,
      mark4: mark4,
      marking5: marking5,
      mark5: mark5,
    
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (type === "Document Evaluation") {
        axios
          .post(
            "http://localhost:5000/documentmarking/create",
            newMarkingScheme
          )
          .then(
            () =>
              alert("Success!"),
            navigate("/createmarking")
          )
          .catch((err) => alert("Failed!"));
      } else {
        axios
          .post(
            "http://localhost:5000/presentationmarking/create",
            newMarkingScheme
          )
          .then(
            () =>
              alert("Success!"),
            navigate("/createmarking")
          )
          .catch((err) => alert("Failed!"));
      }
    }
    setValidated(true);
  };

  const navigate = useNavigate();

  return (
    <div
      
    >
      <AdminSideNavBar />
      <div
        style={{ marginLeft: "210px", marginRight: "10px", marginTop: "0px" }}
      >
        <div
          style={{
            width: "550px",
            height: "auto",
            marginTop: "20px",
            marginLeft: "365px",
            marginRight: "365px",
            backgroundColor: "whitesmoke",
            padding: "15px",
            borderRadius:"10px"
          }}
        >
          <center>
            <h4 style={{ color: "black" }}>Create Marking Schemes</h4>
          </center>
          <hr />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <h6>General Infromations</h6>
              <Col>
                <Form.Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Evaluation Type
                  </option>
                  <option>Document Evaluation</option>
                  <option>Presentation Evaluation</option>
                </Form.Select>
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={8}>
                <Form.Select
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Document / Presentation Name
                  </option>
                  <option>Topic Assessment Form</option>
                  <option>Proposal Document</option>
                  <option>Final Thesis</option>
                  <option>Final Presentation</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Total Marks"
                  value={totMarks}
                  onChange={(e) => settotMarks(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <h6>Marking </h6>
              <p>At least one marking is required</p>
              <Col xs={9}>
                <Form.Control
                  placeholder="marking"
                  value={marking1}
                  onChange={(e) => setmarking1(e.target.value)}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={mark1}
                  onChange={(e) => setmark1(e.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="marking"
                  value={marking2}
                  onChange={(e) => setmarking2(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={mark2}
                  onChange={(e) => setmark2(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="marking"
                  value={marking3}
                  onChange={(e) => setmarking3(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={mark3}
                  onChange={(e) => setmark3(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="marking"
                  value={marking4}
                  onChange={(e) => setmarking4(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={mark4}
                  onChange={(e) => setmark4(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Col xs={9}>
                <Form.Control
                  placeholder="marking"
                  value={marking5}
                  onChange={(e) => setmarking5(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Mark"
                  value={mark5}
                  onChange={(e) => setmark5(e.target.value)}
                />
              </Col>
            </Row>
            
            <Button
              style={{ marginLeft: "450px", marginTop: "10px" }}
              variant="success"
              type="submit"
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddMarkingScheme;
