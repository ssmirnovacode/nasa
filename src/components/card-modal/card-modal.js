import React from "react";
import { Modal, Button } from 'react-bootstrap';
import { baseUrl } from '../../services/blueMarble'; 
import './card-modal.scss';
import { formatDate } from '../../utils/converters';

const CardModal = (props) => {

  const { date, caption, image } = props.item;

  const year = date.slice(0,4),
    month = date.slice(5,7),
    day = date.slice(8,10)

    return (
      <Modal className="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header className="modal_content" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{`${formatDate(date.slice(0,10))} at ${date.slice(11)}`}:</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_content modal_content_body">
          
            <img className="modal_image" alt={caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/png/${image}.png`} />
          
        </Modal.Body>
        <Modal.Footer className="modal_content modal_content_footer">
          <a className="modal_content_link" href={`${baseUrl}/archive/natural/${year}/${month}/${day}/png/${image}.png`} target="blank">View on NASA web with zoom options</a>
          <Button variant="outline-light" className="modal_btn" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  export default CardModal;