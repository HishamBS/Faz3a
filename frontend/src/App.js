import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//component
import NavBarComp from './Component/main/NavBarComp'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Profile from './Component/Profile'
import Map from './Component/Map'
export class App extends Component {
  render() {
    return (
      <div className='App'>
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