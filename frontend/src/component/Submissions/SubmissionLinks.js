import React, { useEffect, useState } from "react";
import "../Uploads/UploadStyle.css";
import axios from "axios";
import StudentSideNavBar from "../SideBars/StudentSideNavBar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const SubmissionLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getAllSubmissionTypes = () => {
      axios
        .get("http://localhost:5000/subtype")
        .then((res) => {
          setLinks(res.data);
        })

        .catch((error) => {
          console.log(error);
        });
    };
    getAllSubmissionTypes();
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
        
      <div className="cp7">
        <Form>

          <h3>Submission Links</h3><hr color="white"/><br/><br/>
            {links.map((link) => (
              <Link to={`/subtypes/${link._id}`}>
                <Button variant="link" key={link._id}>
                  {link.LinkName}
                </Button><br/>
              </Link>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionLinks;
