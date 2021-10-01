import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { setRover } from '../../redux/actions/roverActions';
import { connect } from 'react-redux';

class RoverSelect extends Component {

    handleChange = (e) => {
        this.props.setRover(e.target.value);
    }

    render() {

        return(
            <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                <option value="Curiosity">Select a rover</option>
                <option value="Spirit">Spirit</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Curiosity">Curiosity</option>
            </Form.Select>
        )
    }
    
};

const mapStateToProps = state => ({
    rover: state.rover
});

const mapDispatchToProps = {
    setRover
}

export default connect(mapStateToProps, mapDispatchToProps)(RoverSelect);