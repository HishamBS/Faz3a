import React, { Component } from 'react'
import Nav from './main/NavBarComp'
import { Row, Col } from 'react-bootstrap'
import '../App.css';

export default class About extends Component {
    render() {
        return (
            <div >
                <Nav />
                <hr />
                <div className="about">
                    <Row>
                        <Col style={{ marginTop: '10%' }}>
                            <h2>About Us</h2>
                            <p>
                                Extended kindness trifling remember he confined outlived if.
                                Assistance sentiments yet unpleasing say. Open they an busy they my such high.
                                An active dinner wishes at unable hardly no talked on. Immediate him her resolving his favourite.
                                Wished denote abroad at branch at.
                        </p>
                        </Col>
                        <Col>
                            <img style={{ opacity: '0.8' }} src="https://picography.co/wp-content/uploads/2018/09/picography-man-woman-laptop-tablet-small-768x512.jpg" alt="" /></Col>

                    </Row>
                </div>
            </div>
        )
    }
}
