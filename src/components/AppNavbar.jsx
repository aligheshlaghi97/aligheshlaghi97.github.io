import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/AppNavbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const AppNavbar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Personal-Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home" className="nav-btn"><i className="fa-solid fa-house" /> Home</Nav.Link>
          <Nav.Link href="#about" className="nav-btn"><i className="fa-regular fa-address-card" /> About</Nav.Link>
          <Nav.Link href="#projects" className="nav-btn"><i className="fa-solid fa-bars-progress" /> Projects</Nav.Link>
          <Nav.Link href="#contact" className="nav-btn"><i className="fa-regular fa-address-book" /> Contact</Nav.Link>
          <Nav.Link href="#resume" className="nav-btn"><i className="fa-regular fa-file" /> Resume</Nav.Link>
          <Nav.Link href="#testimonials" className="nav-btn"><i className="fa-solid fa-people-arrows" /> Testimonials</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;