import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../logo.png';
import './Header.css'


const Header = () => {
    return (
        <>
        <Navbar bg="dark"
        variant="dark"
       >
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="80px" className="me-5 p-2" alt="" />
            Smart Electronics</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
                <Nav.Link as={Link} to="/login" className="fs-4 bg-dark text-light"><FontAwesomeIcon icon={faUser} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="margin"></div>
      <Navbar
        className=" fs-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/recommendation">Recommendation</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Manage Items</Nav.Link>
            <Nav.Link href="#deets">Add Items</Nav.Link>
            <Nav.Link href="#deets">My Items</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;