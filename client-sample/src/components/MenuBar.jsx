import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <Navbar className="p-2" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/all-users">All Users</Nav.Link>
                    <Nav.Link as={Link} to="/create-user">Create User</Nav.Link>
                    <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MenuBar
