import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './mars.scss';
import DateForm from '../date-form/date-form';
import Error from '../error/error';
import Loading from '../loading/loading';
import { setDate } from '../../redux/actions/dateActions';
import { roverImagesLoaded, roverImagesError, roverImagesRequested } from '../../redux/actions/roverImagesActions';
import { connect } from 'react-redux';
import MarsRovers from '../../services/marsRovers';
import MarsCard from '../mars-card/mars-card';

const marsRovers = new MarsRovers();

class Mars extends Component {

    componentDidMount() {
        this.props.roverImagesRequested();
        marsRovers.getRoverManifest('Curiosity')
        .then(res => {
            console.log(res.photo_manifest)
            this.props.setDate(res.photo_manifest.max_date);
        })
        .then(() => {
            //console.log(this.props.date);
            marsRovers.getRoverPhotosByDate('Curiosity', this.props.date)
            .then(res => {
                //console.log(res);
                res.photos ? this.props.roverImagesLoaded(res.photos) : this.props.roverImagesError({ message: 'Rover didnt take photos on that day'})
            })
            .catch(err => this.props.roverImagesError(err))
        })
        
        .catch(err => this.props.roverImagesError(err))
    }

    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.props.roverImagesRequested();
            marsRovers.getRoverPhotosByDate('Curiosity', this.props.date)
            .then(res => {
                //console.log(res);
                res.photos ? this.props.roverImagesLoaded(res.photos) : this.props.roverImagesError({ message: 'Rover didnt take photos on that day'})
            })
            .catch(err => this.props.roverImagesError(err))
        }
    }

    render() {

        const { date } = this.props;

        const cards = this.props.images.map(img => {
            return(
                <Col key={img.id} xs={12} sm={6} lg={4}>
                    <MarsCard img={img} />
                </Col>
            )
        })

        return(
            <Container fluid className="mars-gallery mars-gallery_wrapper">
                <Row>
                    <Col>
                        <Container fluid className="gallery_header">
                            <Row>
                                <Col as={Col} xs={12} sm={6} lg={5}>
                                    <h3>Mars images taken on {date}: </h3>
                                </Col>
                                <Col as={Col} xs={12} sm={6}>
                                    <DateForm />
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid>
                            <Row>
                                {this.props.error ? <Error text={this.props.error.message} /> : 
                                this.props.loading? <Loading /> : cards}
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
    images: state.roverImages.images,
    loading: state.roverImages.loading,
    error: state.roverImages.error
});

const mapDispatchToProps = {
    setDate,
    roverImagesRequested,
    roverImagesLoaded,
    roverImagesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Mars);