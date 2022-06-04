import React, { useEffect, useState } from "react";
import "../Uploads/UploadStyle.css";
import axios from "axios";
import "../Uploads/UploadDocuments";
import Table from "react-bootstrap/Table";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";
import Button from "react-bootstrap/Button";

const DownloadTemplates = () => {
  const [template, settemplate] = useState([]);

  useEffect(() => {
    const getAllUpDocs = () => {
      axios
        .get("http://localhost:5000/uploadDoc")
        .then((res) => {
          settemplate(res.data);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    getAllUpDocs();
  }, []);

  return (
    <div
     
    >
      <StudentSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <center>
          <h1>Templates</h1>
        </center>
        <hr />

        <Table striped bordered hover size="sm" className="cp3">
          <thead>
            <tr>
              <th style={{ fontWeight: "bold", fontSize: "24px" }}>
                Template Type
              </th>
              <th style={{ fontWeight: "bold", fontSize: "24px" }}>Download</th>
            </tr>
          </thead>

          {template.map((temp) => (
            <tbody key={temp._id}>
              <tr>
                <td style={{ color: "white" }}>{temp.name}</td>
                <td>
                  <a href={temp.img}>
                    <Button
                      variant="outline-light"
                      style={{
                        width: "130px",
                        height: "35px",
                        fontWeight: "bold",
                      }}
                    >
                      Download
                    </Button>
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <br />
        <br />

        <br />
      </div>
    </div>
  );
};

export default DownloadTemplates;
