import React, { Component } from 'react'
import { Col, Button } from 'antd';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
    render() {
        return (
            <div>
                <div>
                    <p style={{ 'font-family': "'Architects Daughter', 'cursive'", 'font-size': '90px', textAlign: "center" }}>Faz3a</p>
                    <p style={{ 'font-family': "'Architects Daughter', 'cursive'", 'font-size': '50px' }}>
                        Be Helpfull and Share things with your neighbours
                    </p>
                    <Col style={{textAlign: 'center'}}>
                        <Link block style={{ 'font-size': '17px' , backgroundColor: 'white' , padding: 10, borderRadius: 10}} to='/login'>Join Our Community</Link>
                    </Col>
                </div>
            </div>
        )
    }
}
