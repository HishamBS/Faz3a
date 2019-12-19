import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Icon } from "antd";
//component
import NavBarComp from './Component/main/NavBarComp'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Profile from './Component/Profile/Profile'
import Map from './Component/Map'
import FooterComp from './Component/main/FooterComp'
import About from './Component/About'
import Logo from './Image/logo.png'
import Messaging from "./Component/Msg/Messaging";


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{ backgroundColor: "rgb(252, 250, 251)" }}>
          <Nav className="mr-auto">
            <Navbar.Brand href="/"><img src={Logo} alt="logo" style={{width: '120px'}}/></Navbar.Brand>
          </Nav>
          <Nav>
            {/* <Icon type="twitter" /> */}
          </Nav>
        </Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/services' component={Map} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path="/messages" component={Messaging} />
          </Switch>
        </BrowserRouter>
        <FooterComp />
        <div class="footer">
        <p> &copy; Copyright 2019. All Rights Reserved </p>
    </div>
      </div>
    );
  }
}
export default App;