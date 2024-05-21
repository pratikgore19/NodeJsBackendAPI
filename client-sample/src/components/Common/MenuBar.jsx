import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    const links = [
        { path: '/', label: 'Home' },
        { path: '/all-users', label: 'Clients' },
        { path: '/create-user', label: 'Create Profile' },
        { path: '/about-us', label: 'About Us' }
      ];
    
      const maxVisibleLinks = 5;
    
      return (
        <Navbar className="p-2" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {links.slice(0, maxVisibleLinks).map((link, index) => (
                <Nav.Link key={index} as={Link} to={link.path}>{link.label}</Nav.Link>
              ))}
              {links.length > maxVisibleLinks && (
                <Dropdown>
                  <Dropdown.Toggle variant="dark">
                    More
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {links.slice(maxVisibleLinks).map((link, index) => (
                      <Dropdown.Item key={index + maxVisibleLinks} as={Link} to={link.path}>
                        {link.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default MenuBar
