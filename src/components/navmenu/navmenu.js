import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navmenu.scss'

class Navmenu extends Component {

    state = {
        isDropdownShown: false
    }

    openDropdown = () => {
        this.setState({isDropdownShown: true})
    }

    hideDropdown = () => {
        this.setState({isDropdownShown: false})
    }

    render() {

        return(
            <Navbar variant="dark" className="navmenu" expand="sm" expanded={this.state.isDropdownShown}>
                <Container>
                    <Navbar.Brand><Link className="fw-bold nav-link navmenu_link" to='/'>NASA App</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.openDropdown} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link navmenu_link" to='/earth' onClick={this.hideDropdown} >Earth</Link>
                            <Link className="nav-link navmenu_link" to='/mars' onClick={this.hideDropdown} >Mars</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
};

export default Navmenu;