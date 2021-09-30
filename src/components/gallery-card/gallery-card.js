import React from "react";
import { baseUrl } from '../../services/blueMarble'; 
import { Card } from "react-bootstrap";
import './gallery-card.scss';

const GalleryCard = ({ toggleModal, img, year, month, day }) => {

    return(
        <Card className="card" onClick={toggleModal}>
            <Card.Img alt={img.caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`} />
            <Card.Body className="card_body">
                <Card.Title>{img.date}:</Card.Title>
                <Card.Text>{img.caption}</Card.Text>
            </Card.Body>
            
        </Card>
    )
};

export default GalleryCard;