import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Icon, Layout, Menu, Dropdown, message } from "antd";
import { Navbar, Nav, NavDropdown, Row, Button, Col } from 'react-bootstrap';
import Logo from '../../Image/logo.png'
import swal from "sweetalert";

const { Header, Content, Footer } = Layout;

export default class NavBarComp extends Component {
  handleButtonClick = e => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  handleClick = e => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("user_id");
    swal({
      title: "Logout successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 2500
    }).then(window.location.href = "/")

  };
  render() {
    return (
      <div>
        {!localStorage.usertoken ? (
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" style={{ color: "black", "font-size": "20px" }}>Home</Nav.Link>
                <Nav.Link as={Link} to="/services" style={{ color: "black", "font-size": "20px" }}>Services</Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ color: "black", "font-size": "20px" }}>About</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login" style={{ color: "black", "font-size": "20px" }}>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup" style={{ color: "black", "font-size": "20px" }}>SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : (
            <Navbar collapseOnSelect expand="lg" variant="light">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/" style={{ color: "black", "font-size": "20px" }}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/services" style={{ color: "black", "font-size": "20px" }}>Services</Nav.Link>
                  <Nav.Link as={Link} to="/about" style={{ color: "black", "font-size": "20px" }}>About</Nav.Link>

                </Nav>
                <Nav>
                  <NavDropdown title=" User Account " style={{ color: "black", "font-size": "20px" }} id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/profile" >Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/messages">My Messages</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Button} onClick={this.handleClick}>LogOut</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
      </div>
    );
  }
}
