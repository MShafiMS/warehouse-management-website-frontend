import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Smart Electronics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Recommendation</Nav.Link>
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