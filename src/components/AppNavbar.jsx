import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../styles/AppNavbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="custom-navbar" sticky='top'>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="nav-btn">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-btn">About</Nav.Link>
          <Nav.Link href="#projects" className="nav-btn">Projects</Nav.Link>
          <Nav.Link href="#contact" className="nav-btn">Contact</Nav.Link>
          <Nav.Link href="#resume" className="nav-btn">Resume</Nav.Link>
          <Nav.Link href="#testimonials" className="nav-btn">Testimonials</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;