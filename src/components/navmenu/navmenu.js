import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navmenu extends Component {

    render() {

        return(
            <Navbar variant="dark" className="navmenu" expand="sm">
                <Container>
                    <Navbar.Brand>NASA App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link navmenu_link" to='/'>Home</Link>
                            <Link className="nav-link navmenu_link" to='/earth'>Earth</Link>
                            <Link className="nav-link navmenu_link" to='/mars'>Mars</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
};

export default Navmenu;