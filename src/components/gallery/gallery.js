import React, { Component } from 'react';
import BlueMarble, { baseUrl } from '../../services/blueMarble'; 

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
            day: null
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

    render() {

        const { year, month, day, date } = this.state;

        const cards = this.state.images.slice(0,10).map(img => {
            return(
                <div key={img.identifier}>
                    <h4>{img.caption} on {img.date}:</h4>
                    <img alt={img.caption} src={`${baseUrl}/archive/natural/${year}/${month}/${day}/jpg/${img.image}.jpg`} />
                </div>
            )
        })
        
        return(
            <>
            <h2>Images taken on {date}: </h2>
            {cards}
            </>
            /* {
                this.state.images.map(img => {
                    return(
                        <div key={img.identifier}>{img.image}</div>
                    )
                })
            } */
        )
    }
}

export default Gallery;