import React, { Component } from 'react';
import { NASAimages, baseUrl } from '../../api/nasa';

const nasa = new NASAimages();

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
        nasa.getLastAvailableDate()
        .then(date => {
            this.setState({
                date: date[0],
                year: date[0].slice(0,4),
                month: date[0].slice(5,7),
                day: date[0].slice(8,10)
            })
        })
        .then(() =>{
            nasa.getNaturalsByDate(this.state.date)
            .then(res =>  this.setState({
                images: res
            }))
            .catch(err => console.log(err))
        })

        /* nasa.getNaturalsByDate('2016-10-31')
            .then(res =>  this.setState({
                images: res
            })) */
        .catch(err => console.log(err))
    }

    render() {

        const { year, month, day, date } = this.state;

        const cards = this.state.images.slice(0,10).map(img => {
            /* const year = img.date.slice(0,4);
            const month = img.date.slice(5,7);
            const day = img.date.slice(8,10); */

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