import React from "react";
import Form from "react-bootstrap/Form";
import "../Uploads/UploadStyle.css";
import { Link } from "react-router-dom";
import "../Uploads/UploadDocuments";
import AdminSideNavBar from "../SideBars/AdminSideNavBar";

const UploadTemp = () => {
  return (
    <div
     
    >
      <AdminSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <center>
          <h1>Templates</h1>
        </center>
        <hr />
        <div
          style={{
            marginLeft: "80px",
          }}
        >
          <u>
            <h3>Proposal Document</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Topic Assessment Form</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Presentation Slides</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />

          <u>
            <h3>Final Thesis</h3>
          </u>
          <br />
          <Link to="/uploaddoc">
            <button
              type="submit"
              style={{
                backgroundColor: "#336699",
                width: "150px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              UPLOAD
            </button>
          </Link>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default UploadTemp;
