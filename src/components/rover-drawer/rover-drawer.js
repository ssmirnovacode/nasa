import React from 'react';
import { Offcanvas, CloseButton } from 'react-bootstrap';
import './rover-drawer.scss';

const RoverDrawer = props => {

    const { name, launched, landed, status, lastUpdate } = props.rover;

    return(
        <Offcanvas className="rover-drawer" show={props.show} onHide={props.onHide} {...props}>
            <Offcanvas.Header>
            <CloseButton variant="white" className="mars-modal-close"  onClick={props.onHide}/>
            <Offcanvas.Title>{name} rover</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
                <li>Launched: <strong>{launched}</strong></li>
                <li>Landed on Mars: <strong>{landed}</strong></li>
                <li>Last recorded activity: <strong>{lastUpdate}</strong></li>
                <li>Mission status: <strong>{status}</strong></li>
            </ul>
            </Offcanvas.Body>
        </Offcanvas>
    )
    
};

export default RoverDrawer;