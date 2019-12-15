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
                        <div class="nav-title">JoGeek</div>
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
                        <Icon type="search" />
                    </div>
                </div>
                </Header>
                {/* <Navbar bg="light" expand="lg">
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
                </Navbar> */}
            </div >
        )
    }
}