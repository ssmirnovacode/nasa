import React, { Component } from 'react';
import BlueMarble from '../../services/blueMarble'; 
import { Container, Row, Col } from 'react-bootstrap';
import GalleryCard from '../gallery-card/gallery-card';
import './gallery.scss';
import { setDate } from '../../redux/actions/dateActions';
import { connect } from 'react-redux';
import DateForm from '../date-form/date-form';

const blueMarble = new BlueMarble();

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: false,
            error: false,
        }
    }

    componentDidMount() {
        blueMarble.getLastAvailableDate()
        .then(dates => {
            this.props.setDate(dates[0]);
        })
        .then(() =>{
            blueMarble.getNaturalsByDate(this.props.date)
            .then(res =>  this.setState({
                images: res
            }))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    render() {

        const { date } = this.props;

        const year = date.slice(0,4),
            month = date.slice(5,7),
            day = date.slice(8,10)

        const cards = this.state.images.map(img => {
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
                                    <h3>Images taken on {date}: </h3>
                                </Col>
                                <Col as={Col} xs={12} sm={6}>
                                    <DateForm />
                                </Col>
                            </Row>
                            
                        </Container>
                        <Container fluid>
                            <Row>
                                {cards}
                            </Row>
                        </Container>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
};

const mapStateToProps = state => ({
    date: state.date
});
const mapDispatchToProps = {
    setDate
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);