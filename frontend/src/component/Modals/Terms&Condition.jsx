import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function TermsAndConditionsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Welcome to Our Platform</h5>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of our platform. By accessing this platform, we assume you
            accept these terms and conditions. Do not continue to use the
            platform if you do not agree to all the terms and conditions stated
            on this page.
          </p>
          <h5>License</h5>
          <p>
            Unless otherwise stated, we own the intellectual property rights for
            all material on this platform. All intellectual property rights are
            reserved. You may access this from the platform for your own
            personal use subjected to restrictions set in these terms and
            conditions.
          </p>
          <h5>Usage</h5>
          <p>
            You are specifically restricted from the following:
            <ul>
              <li>Publishing any platform material in any media</li>
              <li>
                Selling, sublicensing, or otherwise commercializing any platform
                material
              </li>
              <li>
                Using this platform in any way that is damaging to this platform
              </li>
            </ul>
          </p>
          <p>... (Add more as per your requirements)</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TermsAndConditionsModal;
