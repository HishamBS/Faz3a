import React, { Component } from "react";
import "../../CSS/nav.css";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Icon, Layout, Menu, Dropdown, message, Button } from "antd";

const { Header, Content, Footer } = Layout;

export default class NavBarComp extends Component {
  handleButtonClick = e => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  // handleMenuClick = (e) => {
  //     message.info('Click on menu item.');
  //     console.log('click', e);
  // }
  handleClick = e => {
    localStorage.removeItem("usertoken");
    localStorage.removeItem("user_id");
    window.location.href = "/";
  };
  render() {
    return (
      <div>
        {!localStorage.usertoken ? (
          <Header class="nav">
            <div class="nav">
              <input type="checkbox" id="nav-check" />
              <div className="nav-header">
                <div class="nav-title"></div>
              </div>
              <div className="nav-btn">
                <label for="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className="nav-links">
                <Link as={Link} to="/">
                  Home
                </Link>
                <Link as={Link} to="/services">
                  Services
                </Link>
                <Link as={Link} to="/points">
                  Points
                </Link>
                <Link as={Link} to="/about">
                  About
                </Link>
                <Link as={Link} to="/contact">
                  Contact
                </Link>
              </div>
              <div class="nav-links">
                <Link as={Link} to="/signup">
                  SignUp
                </Link>
                <Link as={Link} to="/login">
                  Login
                </Link>
              </div>
            </div>
          </Header>
        ) : (
          <Header class="nav">
            <div class="nav">
              <input type="checkbox" id="nav-check" />
              <div className="nav-header">
                <div class="nav-title"></div>
              </div>
              <div className="nav-btn">
                <label for="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className="nav-links">
                <Link as={Link} to="/">
                  Home
                </Link>
                <Link as={Link} to="/services">
                  Services
                </Link>
                <Link as={Link} to="/points">
                  Points
                </Link>
                <Link as={Link} to="/about">
                  About
                </Link>
                <Link as={Link} to="/contact">
                  Contact
                </Link>
              </div>
              <div class="nav-links">
                <Dropdown.Button
                  overlay={
                    <Menu onClick={this.handleMenuClick}>
                      <Menu.Item key="1">
                        <Icon type="user" />
                        Profile
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Icon type="user" />
                        Add Items
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Icon type="user" />
                        Chat
                      </Menu.Item>
                      <Button onClick={this.handleClick} key="3">
                        <Icon type="user" />
                        LogOut
                      </Button>
                    </Menu>
                  }
                  icon={<Icon type="user" />}
                >
                  User
                </Dropdown.Button>
              </div>
            </div>
          </Header>
        )}
      </div>
    );
  }
}
