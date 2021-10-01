import React from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { baseUrl } from '../../services/blueMarble'; 
import './cards-carousel.scss';

const CardsCarousel = props => {

    const { images, date } = props;

    const year = date.slice(0,4),
            month = date.slice(5,7),
            day = date.slice(8,10);

    return(
        <Carousel className="cards-carousel">
            {
                images.map(image => {
                    return(
                        <Carousel.Item key={image.identifier} className="cards-carousel_item">
                            <img
                            className="cards-carousel_image d-block"
                            src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${image.image}.jpg`}
                            alt={image.caption}
                            />
                            <Carousel.Caption>
                            <h3>{image.date}</h3>
                            <p>{image.caption}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
            
        </Carousel>
    )
};

const mapStateToProps = state => ({
    date: state.date,
    images: state.images.images
});

export default connect(mapStateToProps)(CardsCarousel);