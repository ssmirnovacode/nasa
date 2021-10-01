import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './mars-card.scss';

class MarsCard extends Component {

    render() {

        const { img } = this.props;
    
        return(
            <>
            <Card className="card" onClick={this.toggleModal}>
                <Card.Img alt={`Image taken by ${img.rover.name} on ${img.earth_date}`} src={img.img_src} />
                <Card.Body className="card_body">
                    <Card.Title>{img.earth_date}:</Card.Title>
                    <Card.Text>Image taken by {img.rover.name} rover with {img.camera.name} camera on {img.sol}th marsian day of it´s mission.</Card.Text>
                </Card.Body>
            </Card>
            </>
        )
    }
    
};

export default MarsCard;