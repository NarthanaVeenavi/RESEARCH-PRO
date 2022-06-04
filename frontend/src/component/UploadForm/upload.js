import React, { useState } from "react";
import axios from "axios";
import FileInput from "../FileManager/fileInput";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    image: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/uploadDoc";
      const { data: res } = await axios.post(url, data);
      alert("Success!"),
        navigate("/uploadtemp");
      console.log(res);
    } catch (error) {
      alert("Failed!", "Something Went Wrong!");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Upload Template</h1>
        <br />
        <br />
        <Form.Select
          type="text"
          className={styles.input}
          placeholder="Upload Type"
          name="name"
          onChange={handleChange}
          value={data.name}
        >
          <option value="" selected disabled hidden>
            Template Type
          </option>
          <option>Topic Assessment form</option>
          <option>Proposal Document</option>
          <option>Presentation slides</option>
          <option>Final Thesis</option>
        </Form.Select>

        <br />
        <br />

        <FileInput
          name="imaage"
          label="Choose from"
          handleInputState={handleInputState}
          type="image"
          value={data.image}
        />

        <br />
        <br />
        <br />
        <Button variant="success" type="submit" onClick={handleSubmit}>
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UpForm;
