import Modal from "react-bootstrap/Modal";
import { ModalBody, ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const UserModalSignup = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Register as</Modal.Title>
      </Modal.Header>

      <ModalFooter>
        <Link to="/Studentreg">
          <Button variant="success">STUDENT</Button>
        </Link>
        <Link to="/Staffreg">
          <Button variant="danger">STAFF</Button>
        </Link>
      </ModalFooter>
    </Modal>
  );
};

export default UserModalSignup;
