import React from "react";
import { Modal, CloseButton } from 'react-bootstrap';
import './mars-modal.scss'

const MarsModal = (props) => {

  const { earth_date, rover, img_src } = props.item;

    return (
      <Modal className="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
         <CloseButton variant="white" className="mars-modal-close"  onClick={props.onHide}/>
          <img className="modal_image" alt={`Taken by ${rover.name} on ${earth_date}`} src={img_src} />
        {/* <Modal.Header className="modal_content" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{earth_date}</h4>
          </Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body className="modal_content modal_content_body">
        <CloseButton variant="white" className="mars-modal-close" />
            <img className="modal_image" alt={`Taken by ${rover.name} on ${earth_date}`} src={img_src} />
          
        </Modal.Body> */}
        {/* <Modal.Footer className="modal_content modal_content_footer">
          <Button variant="outline-light" className="modal_btn" onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  };

  export default MarsModal;