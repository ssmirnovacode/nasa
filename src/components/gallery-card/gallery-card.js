import React, { Component } from "react";
import { baseUrl } from '../../services/blueMarble'; 
import { Card } from "react-bootstrap";
import './gallery-card.scss';
import CardModal from '../card-modal/card-modal';
import { formatDate } from '../../utils/converters';

class GalleryCard extends Component {

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

        const { img, year, month, day } = this.props;
    
        return(
            <>
            <Card className="card" onClick={this.toggleModal}>
                <Card.Img alt={img.caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`} />
                <Card.Body className="card_body">
                    <Card.Title>{`${formatDate(img.date.slice(0,10))} at ${img.date.slice(11)}`}:</Card.Title>
                    <Card.Text>{img.caption}</Card.Text>
                </Card.Body>
                
            </Card>
            <CardModal fullscreen show={this.state.modalShow} onHide={this.toggleModal} item={img} />
            </>
        )
    }
    
};

export default GalleryCard;