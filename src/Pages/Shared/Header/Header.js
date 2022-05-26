import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowRightToBracket, faRightToBracket, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../logo.png';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
    return (
        <>
        <Navbar bg="dark"
        variant="dark"
       >
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} width="80px" className="me-4 p-1" alt="" />
            <span className='fs-2 fw-bold'>Smart Electronics</span></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
          {user ? (
                <Nav.Link onClick={handleSignOut} className="fs-4 bg-dark text-light"><FontAwesomeIcon icon={faArrowRightFromBracket} /></Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" className="fs-4 bg-dark text-light"><FontAwesomeIcon icon={faArrowRightToBracket} />
                </Nav.Link>
              )}
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
            <Nav.Link as={Link} to="/recommendation">Recommendation</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to="/manageinventories">Manage Items</Nav.Link>
            <Nav.Link as={Link} to="/addinventories">Add Items</Nav.Link>
            <Nav.Link as={Link} to="/myinventories">My Items</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;