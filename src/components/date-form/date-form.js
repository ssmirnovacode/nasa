import React, { Component } from 'react';
import './date-form.scss';
import { Form, Button, InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap'

class DateForm extends Component  {

    render() {

        return(
            <Form>
                <InputGroup className="mb-3">
                    <input type="date"/>
                    <Button variant="outline-light" id="button-addon1">Set date</Button>
                </InputGroup>
            </Form>
            
            
            )
    }
};

export default DateForm;