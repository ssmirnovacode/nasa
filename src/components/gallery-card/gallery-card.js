import React from "react";
import { baseUrl } from '../../services/blueMarble'; 
import { Card } from "react-bootstrap";

const GalleryCard = ({ img, year, month, day }) => {

    return(
        <Card className="mt-4">
            <Card.Img variant="bottom" alt={img.caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`} />
            <Card.Body>
                <Card.Title>{img.date}:</Card.Title>
                <Card.Text>{img.caption}</Card.Text>
            </Card.Body>
            
        </Card>
    )
};

export default GalleryCard;

/* <div key={img.identifier}>
            <h4>{img.caption} on {img.date}:</h4>
            <img alt={img.caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`} />
        </div> */