import React, { Component } from 'react';
import { Offcanvas, CloseButton } from 'react-bootstrap';
import './rover-drawer.scss';

class RoverDrawer extends Component {

    render() {

        return(
            <Offcanvas className="rover-drawer" show={this.props.show} onHide={this.props.onHide} {...this.props}>
                <Offcanvas.Header>
                <CloseButton variant="white" className="mars-modal-close"  onClick={this.props.onHide}/>
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