import React from 'react';
import { Offcanvas, CloseButton } from 'react-bootstrap';
import './rover-drawer.scss';
import { formatDate } from '../../utils/converters';

const RoverDrawer = props => {

    const { name, launched, landed, status, lastUpdate } = props.rover;

    console.log(props.rover);

    return(
        <Offcanvas className="rover-drawer" show={props.show} onHide={props.onHide} {...props}>
            <Offcanvas.Header>
            <CloseButton variant="white" className="mars-modal-close"  onClick={props.onHide}/>
            <Offcanvas.Title>{name} rover</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
                <li>Launched: <strong>{formatDate(launched)}</strong></li>
                <li>Landed on Mars: <strong>{formatDate(landed)}</strong></li>
                <li>Last recorded activity: <strong>{formatDate(lastUpdate)}</strong></li>
                <li>Mission status: <b><em>{status}</em></b></li>
            </ul>
            </Offcanvas.Body>
        </Offcanvas>
    )
    
};

export default RoverDrawer;