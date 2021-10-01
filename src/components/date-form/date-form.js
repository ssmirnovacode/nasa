import React, { Component } from 'react';
import './date-form.scss';
import { Form, Button, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { setDate } from '../../redux//actions/dateActions';

class DateForm extends Component  {

    state = {
        dateValue: this.props.date
    }

    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.setState({
                dateValue: this.props.date 
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
    date: state.date
});
const mapDispatchToProps = {
    setDate
}

export default connect(mapStateToProps, mapDispatchToProps)(DateForm);