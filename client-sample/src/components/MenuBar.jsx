import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MenuBar = () => {
    return (
        <Navbar className='mb-3' bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">MyWebsite</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/all-users">
                        <Nav.Link>All Users</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create-user">
                        <Nav.Link>Create User</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about-us">
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MenuBar
