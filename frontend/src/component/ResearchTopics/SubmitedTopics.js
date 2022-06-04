import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SubmitedTopics = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const getAllSub = () => {
      axios
        .get("http://localhost:5000/submission")
        .then((res) => {
          setSubmissions(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAllSub();
  }, []);
  return (
    <div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Download</th>
          </tr>
        </thead>
        {submissions
          .filter((subType) => subType.subType === "Topic Assessment form")
          .map((submission) => (
            <tbody key={submission._id}>
              <tr>
                <td>{submission.grpId}</td>
                <td>
                  <a href={submission.file}>
                    <Button variant="primary">Download</Button>
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default SubmitedTopics;
