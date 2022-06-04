import React from "react";
import Modal from "react-bootstrap/Modal";
import PanelAssignForm from "./PanelMemberAssignForm";
import { ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";

const PanelMemberAssignModal = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Panel Assign
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <PanelAssignForm />
      </ModalBody>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PanelMemberAssignModal;
