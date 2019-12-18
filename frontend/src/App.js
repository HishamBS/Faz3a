import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Icon } from "antd";

//component
<<<<<<< HEAD
import NavBarComp from './Component/main/NavBarComp'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Profile from './Component/Profile/Profile'
import Map from './Component/Map'
import FooterComp from './Component/main/FooterComp'
import About from './Component/About'
import Logo from './Image/logo.png'
=======
import NavBarComp from "./Component/main/NavBarComp";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Profile from "./Component/Profile/Profile";
import Messaging from "./Component/Msg/Messaging";
import Map from "./Component/Map";
>>>>>>> 094ed32d429e2ce15f4fd492f06afb1b30b14573

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
<<<<<<< HEAD
            <Route exact path='/' component={Home} />
            <Route path='/points' component={Home} />
            <Route path='/services' component={Map} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </BrowserRouter>
        <FooterComp />
        <div class="footer">
        <p> &copy; Copyright 2019. All Rights Reserved </p>
        
    </div>
=======
            <Route exact path="/" component={Home} />
            <Route path="/points" component={Home} />
            <Route path="/services" component={Map} />
            <Route path="/about" component={Home} />
            <Route path="/contact" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/messages" component={Messaging} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
>>>>>>> 094ed32d429e2ce15f4fd492f06afb1b30b14573
      </div>
    );
  }
}
export default App;
