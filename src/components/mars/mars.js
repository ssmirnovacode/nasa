import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './mars.scss';
import DateForm from '../date-form/date-form';
import Error from '../error/error';
import Loading from '../loading/loading';
import { setDate } from '../../redux/actions/dateActions';
import { roverImagesLoaded, roverImagesError, roverImagesRequested } from '../../redux/actions/roverImagesActions';
import { connect } from 'react-redux';

class Mars extends Component {

    render() {

        const { date } = this.props;

        const year = date.slice(0,4),
            month = date.slice(5,7),
            day = date.slice(8,10);

        const cards = this.props.images.map(img => {
            return(
                <Col key={img.identifier} xs={12} sm={6} md={4} lg={3}>
                    <MarsCard img={img} year={year} month={month} day={day} />
                </Col>
            )
        })

        return(
            <Container>
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
    images: state.rover.images,
    loading: state.rover.loading,
    error: state.rover.error
});

const mapDispatchToProps = {
    setDate,
    roverImagesRequested,
    roverImagesLoaded,
    roverImagesError
}

export default connect(mapStateToProps, mapDispatchToProps)(Mars);