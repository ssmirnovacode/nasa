import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import GalleryCard from '../gallery-card/gallery-card';
import './gallery.scss';
import { setDate, dateRequested } from '../../redux/actions/dateActions';
import { imagesLoaded, imagesError, imagesRequested } from '../../redux/actions/imagesActions';
import { connect } from 'react-redux';
import DateForm from '../date-form/date-form';
import Error from '../error/error';
import Loading from '../loading/loading';
import CardsCarousel from '../cards-carousel/cards-carousel';
import { formatDate } from '../../utils/converters';

class Gallery extends Component {

    state = {
        isCarousel: false
    }

    toggleView = () => {
        this.setState(state => ({
            isCarousel: !state.isCarousel
        }))
    }

    componentDidMount() {
        this.props.dateRequested();
    }

    render() {
        //console.log('rendered');
        const { date } = this.props;

        const year = date.slice(0,4),
            month = date.slice(5,7),
            day = date.slice(8,10)

        const cards = this.props.images.map(img => {
            return(
                <Col key={img.identifier} xs={12} sm={6} md={4} lg={3}>
                    <GalleryCard img={img} year={year} month={month} day={day} />
                </Col>
            )
        })

        return(
            <Container fluid className="gallery_wrapper">
                <Row>
                    <Col>
                        <Container fluid className="gallery_header">
                            <Row>
                                <Col as={Col} xs={12} sm={6} lg={5}>
                                    <h3>Images taken on {formatDate(date)}: </h3>
                                </Col>
                                <Col as={Col} xs={12} sm={6}>
                                    <DateForm />
                                </Col>
                                <Col>
                                    <Form.Check onChange={this.toggleView}
                                        type="switch"
                                        className="gallery_view-switch"
                                        label={`Switch to ${ this.state.isCarousel ? 'gallery' : 'carousel'}`}
                                    />
                                </Col>
                            </Row>
                            
                        </Container>
                        <Container fluid>
                            <Row>
                                {this.props.error ? <Error text={this.props.error.message} /> : 
                                this.props.loading? <Loading /> :
                                this.state.isCarousel ? <CardsCarousel /> : cards}
                            </Row>
                        </Container>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
};

const mapStateToProps = state => ({
    date: state.date,
    images: state.images.images,
    loading: state.images.loading,
    error: state.images.error
});

const mapDispatchToProps = {
    setDate,
    dateRequested,
    imagesRequested,
    imagesLoaded,
    imagesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);