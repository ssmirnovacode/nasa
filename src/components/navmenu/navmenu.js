import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'

class Navmenu extends Component {

    render() {

        return(
            <Navbar variant="dark" className="navmenu" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">NASA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
};

export default Navmenu;