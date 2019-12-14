import React, { Component } from 'react'
import '../../CSS/nav.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
export default class NavBarComp extends Component {
    render() {
        return (
            <div >
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={Link} to="/" className='nav'>Faz3a</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/points'>Points</Nav.Link>
                            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="light">Search</Button>
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}