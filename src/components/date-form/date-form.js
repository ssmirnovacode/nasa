import React, { Component } from 'react';
import './date-form.scss';
import { Form, Button, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { setDate } from '../../redux//actions/dateActions';
import { setRoverData, selectRoverDate } from '../../redux/actions/roverActions';

class DateForm extends Component  {

    state = {
        dateValue: !this.props.variant ? this.props.date : this.props.rover.lastUpdate
    }

    componentDidUpdate(prevProps) {
        if (!this.props.variant && this.props.date !== prevProps.date) {
            this.setState({
                dateValue: this.props.date 
            })
        }
        if (this.props.variant && this.props.rover.lastUpdate !== prevProps.rover.lastUpdate) {
            this.setState({
                dateValue: this.props.rover.lastUpdate 
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            dateValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.variant ? this.props.selectRoverDate({ 
            date: this.state.dateValue, 
            name: this.props.rover.name
        }) :
        this.props.setDate(this.state.dateValue)
    }

    render() {

        return(
            <Form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                    <input type="date" onChange={this.handleChange} value={this.state.dateValue} />
                    <Button variant="outline-light" type="submit" id="button-addon1">Set date</Button>
                </InputGroup>
            </Form>
            )
    }
};

const mapStateToProps = state => ({
    date: state.date,
    rover: state.rover
});
const mapDispatchToProps = {
    setDate,
    setRoverData,
    selectRoverDate
}

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);