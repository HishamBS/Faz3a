import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Icon, Layout, Menu, Dropdown, message } from "antd";
import { Navbar, Nav, NavDropdown, Row, Button, Col } from "react-bootstrap";

const { Header, Content, Footer } = Layout;

export default class NavBarComp extends Component {
  handleButtonClick = e => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  handleClick = e => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };
  render() {
    return (
      <div>
        {!localStorage.usertoken ? (
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  SignUp
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : (
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title=" User Account "
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Button} onClick={this.handleClick}>
                    LogOut
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/messages">
                    My Messages
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}
