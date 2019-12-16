import React, { Component } from 'react'
import Cards from './Cards'
import map from '../Image/map.png'
import car from '../Image/car.jpg'
import '../CSS/image.css'
import '../CSS/footer.css'
import '../App.css';
import '../CSS/nav.css';
import NavBarComp from '../Component/main/NavBarComp'
import { Row, Col, Card, Layout, Breadcrumb, Menu, Button } from 'antd';
import FooterComp from './main/FooterComp'
const { Header, Content } = Layout;
const { Meta } = Card;

export default class Home extends Component {
    render() {
        return (
            <div >
                <hr />
                <NavBarComp />
                <hr />
                <br />
                <div className='Hed'>
                    <Cards />
                </div>
                <hr />
                <h3>===== What In =====</h3>
                <hr />
                <Row gutter={[8, 8]}>
                    <Col span={12} >
                        <h3 class="nav" style={{display: 'flex' , textAlign: 'center',marginTop: '150px' }}>“No one has ever become poor by giving.”</h3>
                        <h4>― Anne Frank</h4>
                    </Col>
                    <Col span={12} >
                        <div class="hover column">
                            <div style={{ width: '100%' }}>
                                <figure ><img src="https://blog.vancity.com/wp-content/uploads/2016/12/GiveHands-iStock-Blog-1280x620-1280x620.jpg" /></figure>
                                <span>Add Services</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={12} >
                        <div class="hover column">
                            <div style={{ width: '100%' }}>
                                <figure ><img src="https://www.stephenbunnphotography.com/wp-content/uploads/2016/06/black-and-white-wedding-photography-12.jpg" /></figure>
                                <span>Provide Services</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={12} >
                        <h3 class="nav" style={{display: 'flex' , textAlign: 'center',marginTop: '150px' }}>“No one is useless in this world who lightens the burdens of another.”</h3>
                        <br />
                        <h4>― Charles Dickens</h4>
                    </Col>
                </Row>
                <br />
                <FooterComp />
            </div>
        )
    }
}
