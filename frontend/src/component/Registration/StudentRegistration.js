import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const bcrypt = require("bcryptjs");

const StudentRegistration = () => {
  const [validated, setvalidated] = useState(false);
  const [ids, setId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [faculty, setFaculty] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState();

  const checkSubmit = (event) => {
    console.log(password);
    const newStudent = {
      ID: ids,
      email: email,
      firstName: firstName,
      lastName: lastName,
      contactNo: contactNo,
      faculty: faculty,
      role: "Student",
    };

    const Login = {
      iD: ids,
      email: email,
      type: "Student",
      password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (confirmPass == password) {
        axios
          .post("http://localhost:5000/student/register", newStudent)
          .then(
            (data) => console.log(data),
            alert("Submitted!")
          )
          .catch((err) => alert(err));

        axios
          .post("http://localhost:5000/login/add", Login)
          .then(() => alert("Submitted!"))
          .catch((err) => alert(err));
      } else {
        alert("Error !");
      }
    }
    setvalidated(true);
  };

  return (
    <div>
    <Header />
    <div className="login-page">

      <form validated="true" onSubmit={checkSubmit} style={{"height": "22cm"}}>
        <br></br>
        <h2 id="text5" style={{"color":"white"}}>Register</h2>
        <br></br>

        <input type="text" name="studentId" placeholder="Enter Student Id" value={Id} onChange={(e) => setId(e.target.value)} required />

        <input type="email" placeholder="Enter SLIIT email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <input type="text" placeholder="Enter contact Number"  pattern="[0-9]{10}" value={contactNo} onChange={(e) => setcontactNo(e.target.value)} required /> 


        <select aria-label="Feedback Type" value={faculty} onChange={(e) => setFaculty(e.target.value)}>
          <option defaultValue="Faculty Type" disabled hidden>
            Faculty Type
          </option>
          <option>Select your faculty</option>
          <option>Computing</option>
          <option>Humanaties and sciences</option>
          <option>School of Architecture</option>
          <option>Business</option>
          <option>Engineering</option>
         
         
        </select>

        <input type="password" placeholder="Enter a Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e) => setPassword(e.target.value)} required/>   

        <input type="password" placeholder="Re-enter the Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e) => setConfirmPassword(e.target.value)} required/> 

        <input type="checkbox" style={{"color":"white", "width":"0.5cm", "height":"0.5cm"}} required /> &nbsp;
        <label style={{"color":"white"}}>I Agree to Terms & Conditions</label>

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
  );
};

export default StudentRegistration;
