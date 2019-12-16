import React, { Component } from 'react'
import '../../CSS/nav.css';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Icon, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default class NavBarComp extends Component {
    render() {
        return (
            <div >
                <Header class="nav" >
                <div class="nav">
                    <input type="checkbox" id="nav-check" />
                    <div class="nav-header">
                        <div class="nav-title"></div>
                    </div>
                    <div class="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div class="nav-links">
                        <Link as={Link} to='/'>Home</Link>
                        <Link as={Link} to='/services'>Services</Link>
                        <Link as={Link} to='/points'>Points</Link>
                        <Link as={Link} to='/about'>About</Link>
                        <Link as={Link} to='/contact'>Contact</Link>
                    </div>
                    <div class="nav-links">
                        <Link as={Link} to='/signup'>SignUp</Link>
                        <Link as={Link} to='/login'>Login</Link>
                    </div>
                </div>
                </Header>
            </div >
        )
    }
}