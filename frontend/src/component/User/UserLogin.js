import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import UserModalSignup from "../Registration/UserModalSignup";
import '../styles/login.css'

const UserLogin = () => {
  const [signup, setsignup] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigate();
  const navigate = (role) => {
    if (role == "Student") {
      navigation("/");
    } else if (role == "Staff") {
      navigation("/");
    } else if (role == "Admin") {
      navigation("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`http://localhost:5000/login/${email}`).then((res) => {
      if (res.data.data != null) {
        let hashPass = res.data.data.password;
        console.log(password);
        const isValid = bcrypt.compareSync(password, hashPass);
        if (isValid) {
          console.log(res.data);
          const token = {
            id: res.data.data._id,
            iD: res.data.data.iD,
            email: res.data.data.email,
            role: res.data.data.type,
          };

          sessionStorage.setItem("token", JSON.stringify(token));
          navigate(res.data.data.type);
          alert("Success!");
        } else {
          alert("Error !");
        }
      } else {
        alert("Error !");
      }
    });
  };

  return (
    <div>
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <h2 id="text2">Login</h2>
          <br></br>
          <br></br>
          <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <input type="password" name="password" placeholder="Enter a Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <div>
            <button type="submit">Login</button>
            <br></br>
            <br></br>

            <span id="text3">Don't you have an account ? </span> &nbsp;&nbsp;
            <button onClick={() => setsignup(true)}>SignUp</button>
          </div>
        </form>
        <UserModalSignup
          show={Modalsignup}
          onHide={() => setsignup(false)}
        />
      </div>
    </div>
  );
};

export default UserLogin;
