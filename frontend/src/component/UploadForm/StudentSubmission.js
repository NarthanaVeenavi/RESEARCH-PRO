import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileManager/fileInput";
import styles from "./styles.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentSubmission = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [data, setData] = useState({
    grpId: "",
    submissionType: "",
    file: "",
  });

  const [cdata, setCData] = useState({
    Status: "Attempted",
  });

  const handleTChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/submission";
      const { data: res } = await axios.post(url, data);
      alert("Success!"),
        navigate("/sublinks");
      console.log(res);
    } catch (error) {
      alert("Failed!");
      console.log(error);
    }
  };

  return (
    <div
      
    >
      <StudentSideNavBar />
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.heading}>Upload Submission</h1>

          <br />
          <br />
          <br />
          <Form.Control
            type="text"
            value={data.grpId}
            placeholder="Group ID"
            name="groupId"
            onChange={handleTChange}
          />

          <br />

          <Form.Select
            type="text"
            placeholder="Submission Type"
            name="subType"
            onChange={handleTChange}
            value={data.submissionType}
          >
            <option value="" selected disabled hidden>
              Submission Type
            </option>
            <option>Topic Assessment form</option>
            <option>Proposal Document</option>
            <option>Presentation slides</option>
            <option>Final Thesis</option>
          </Form.Select>

          <br />
          <br />
          <FileInput
            name="file"
            label="Choose from"
            value={data.file}
            type="submission"
            handleInputState={handleInputState}
          />

          <br />
          <br />
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentSubmission;
