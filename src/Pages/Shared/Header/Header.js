import React from 'react';
import {Button} from 'react-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">Genius Car mechanic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navigation">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            {user?.email ?
                            <Button onClick={logOut} variant='info'> Logout</Button>
                            :
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                            }
                            {user.email && <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;