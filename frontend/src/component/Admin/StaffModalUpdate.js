import React from "react";
import Modal from "react-bootstrap/Modal";
import StaffProEdit from "../UserProfiles/StaffProEdit";
import { ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";

const StaffModalUpdate = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Details
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <StaffProEdit det={props.profile} />
      </ModalBody>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StaffModalUpdate;
