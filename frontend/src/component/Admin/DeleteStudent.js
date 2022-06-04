import Modal from "react-bootstrap/Modal";
import { ModalBody, ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import axios from "axios";

const DeleteStudent = (props) => {
  const DeleteStudent = () => {
    axios
      .delete(
        `http://localhost:5000/student/delete/${props.deleteAdminStudentView._id}`
      )
      .then(() => {
        alert("Deleted!");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete a Student</Modal.Title>
      </Modal.Header>
      <ModalBody>
        Are you sure,do you want to delete this record.
        <br />
      </ModalBody>
      <ModalFooter>
        <Button onClick={DeleteStudent} variant="danger">
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteStudent;
