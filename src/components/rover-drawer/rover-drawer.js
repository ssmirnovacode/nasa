import React, { Component } from 'react';
import { Offcanvas } from 'react-bootstrap';

class RoverDrawer extends Component {

    /* state = {
        show: true
    }

    handleClose = () => {
        this.setState({ show: false })
    } */

    render() {

        return(
            <Offcanvas show={this.props.show} onHide={this.props.onHide} {...this.props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        )
    }
};

export default RoverDrawer;