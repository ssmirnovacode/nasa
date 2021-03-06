import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './mars-card.scss';
import MarsModal from '../mars-modal/mars-modal';
import { formatDate } from '../../utils/converters';

class MarsCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }

    toggleModal = () => {
        this.setState(state => ({
            modalShow: !state.modalShow
        }))
    }

    render() {

        const { img } = this.props;
    
        return(
            <>
            <Card className="mars-card" onClick={this.toggleModal} >
                <Card.Img alt={`Image taken by ${img.rover.name} on ${formatDate(img.earth_date)}`} src={img.img_src}/>
                <Card.Body className="mars-card_body">
                    <Card.Title>Date: {formatDate(img.earth_date)}</Card.Title><hr/>
                    <Card.Text as="div">
                        <div>Rover: <strong>{img.rover.name}</strong></div>
                        <div>Camera: <strong>{img.camera.full_name}</strong></div>
                        <div>Martian day from mission start: <strong>{img.sol}</strong></div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <MarsModal show={this.state.modalShow} onHide={this.toggleModal} item={img} />
            </>
        )
    }
    
};

export default MarsCard;