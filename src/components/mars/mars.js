import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './mars.scss';
import DateForm from '../date-form/date-form';
import Error from '../error/error';
import Loading from '../loading/loading';
import { setRover } from '../../redux/actions/roverActions';
import { connect } from 'react-redux';
import MarsCard from '../mars-card/mars-card';
import RoverSelect from '../rover-select/rover-select';
import RoverDrawer from '../rover-drawer/rover-drawer';
import { formatDate } from '../../utils/converters';

class Mars extends Component {

    state = {
        drawerShow: false
    }

    toggleDrawer = () => {
        this.setState(state => ({ drawerShow: !state.drawerShow }))
    }

    componentDidMount() {
        this.props.setRover('Curiosity');
    }

    render() {

        console.log('Mars rendered');

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
                                <Col as={Col} xs={12} sm={12} lg={4}>
                                    <h3>Mars images taken on {formatDate(date)} by <span className="rover-link" onClick={this.toggleDrawer} >
                                            {this.props.rover.name !== 'Select a rover' ? this.props.rover.name : 'Curiosity'}  rover
                                        </span>: </h3>
                                </Col>
                                <Col as={Col} xs={12} sm={6} lg={4}>
                                    <DateForm variant="rover" />
                                </Col>
                                <Col as={Col} xs={12} sm={6} lg={4}>
                                    <RoverSelect />
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
                <RoverDrawer placement="top" rover={this.props.rover} show={this.state.drawerShow} onHide={this.toggleDrawer} />
            </Container>
        )
    }
};

const mapStateToProps = state => ({
    images: state.roverImages.images,
    loading: state.roverImages.loading,
    error: state.roverImages.error,
    rover: state.rover,
    date: state.rover.selectedDate
});

const mapDispatchToProps = {
    setRover
}

export default connect(mapStateToProps, mapDispatchToProps)(Mars);