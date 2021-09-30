import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { baseUrl } from '../../services/blueMarble'; 
import './card-modal.scss'

const CardModal = (props) => {

  const { date, caption, identifier, image } = props.item;

  const year = date.slice(0,4),
    month = date.slice(5,7),
    day = date.slice(8,10)

    return (
      <Modal className="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal_content" closeButton onClick={props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{date}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_content">
          <img className="modal_image" alt={caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/png/${image}.png`} />
        </Modal.Body>
        <Modal.Footer className="modal_content">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  export default CardModal;
  /* <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal> */