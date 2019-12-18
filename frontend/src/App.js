import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon } from 'antd';

//component
import NavBarComp from './Component/main/NavBarComp'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Profile from './Component/Profile/Profile'
import Map from './Component/Map'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar style={{backgroundColor: "rgb(252, 250, 251)"}}>
          <Nav className="mr-auto">
            <Navbar.Brand href="/">Faz3a</Navbar.Brand>
          </Nav>
          <Nav>
            <Icon type="twitter" />
          </Nav>
        </Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/points' component={Home} />
            <Route path='/services' component={Map} />
            <Route path='/about' component={Home} />
            <Route path='/contact' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}
export default App;