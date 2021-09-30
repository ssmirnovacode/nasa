import React, { Component } from 'react';
import BlueMarble from '../../services/blueMarble'; 
import { Container, Row, Col } from 'react-bootstrap';
import GalleryCard from '../gallery-card/gallery-card';
//import Portal from '../portal/portal';
import './gallery.scss';
import CardModal from '../card-modal/card-modal';

const blueMarble = new BlueMarble();

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: false,
            error: false,
            date: '',
            year: null,
            month: null,
            day: null,
            //modalShow: false
        }
    }

    componentDidMount() {
        blueMarble.getLastAvailableDate()
        .then(date => {
            this.setState({
                date: date[0],
                year: date[0].slice(0,4),
                month: date[0].slice(5,7),
                day: date[0].slice(8,10)
            })
        })
        .then(() =>{
            blueMarble.getNaturalsByDate(this.state.date)
            .then(res =>  this.setState({
                images: res
            }))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
/* 
    toggleModal = () => {
        console.log(!this.state.modalShow);
        this.setState(state => ({
            modalShow: !state.modalShow
        }))
    } */

    render() {

        const { year, month, day, date, /* modalShow */ } = this.state;

        const cards = this.state.images.map(img => {
            return(
                <Col key={img.identifier} xs={12} sm={6} md={4} lg={3}>
                    <GalleryCard /* toggleModal={this.toggleModal} */ img={img} year={year} month={month} day={day} />
                </Col>
            )
        })

        return(
            <Container fluid className="gallery_wrapper">
                <Row>
                    <Col>
                        <h2>Images taken on {date}: </h2>
                        <Container fluid>
                            <Row>
                                {cards}
                            </Row>
                        </Container>
                        {/* <CardModal show={modalShow} toggleModal={this.toggleModal} /> */}
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}

export default Gallery;