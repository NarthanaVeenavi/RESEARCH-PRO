import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserModalDelete = (props) => {
  const opp = () => {
    if (props.type == "delete") {
      axios
        .delete(`http://localhost:5000/staff/delete/${props.profile._id}`)
        .then(() => {
          alert("Deleted!");
          navigate("/UserLogin");
        })
        .catch((err) => {
          alert(err);
        });

      axios
        .delete(`http://localhost:5000/student/delete/${props.profile._id}`)
        .then(() => {
          alert("Deleted!");
          navigate("/UserLogin");
        })
        .catch((err) => {
          alert(err);
        });

      axios
        .delete(`http://localhost:5000/Admin/delete/${props.profile._id}`)
        .then(() => {
          alert("Deleted!");
          navigate("/UserLogin");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      sessionStorage.removeItem("token");
      navigate("/UserLogin");
    }
  };
  const navigate = useNavigate();

  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {console.log(props.type)}
      <Modal.Header closeButton>
        <Modal.Title>
          {props.type == "delete" ? "Delete Account" : "Logout"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type == "delete"
          ? "Are you sure you want to delete your account permanetly ?"
          : "Do you want to logout"}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={opp}>
          {props.type == "delete" ? "Delete" : "Logout"}
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModalDelete;
