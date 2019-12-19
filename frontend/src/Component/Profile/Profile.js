import React, { Component } from 'react'
import { Avatar, Form, Icon, Input, Button } from 'antd';
import {Spinner, Col, Row} from "react-bootstrap"
import { checkAuth } from "../functionAuth";
import axios from "axios";
import Requested_items from './Requested_items'
import Provided_items from './Provided_items'
import Forgetpasswor from './forgetpass'
import Add_items from './Add_items';
import Return_item from './Return_item'
import Remove_items from './Remove_items'
export default class Profile extends Component {
    state = {
        userInfo: '',
        password: '',
        disabled: true,
        nickname: '',
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false});
        }, 3500);
        const uid = localStorage.getItem("user_id");
        if (uid) {
            axios
                .get(`/api/v1/users/${uid}`)
                .then(user => {
                    this.setState({ userInfo: user.data })
                })
                .catch(err => console.log(err));
        }
    }

    changePass = () => {
        var body = {
            password: this.state.password
        }
        let user = localStorage.getItem('user_id')
        axios
            .put(`/api/v1/users/editpassword/${user}`, body)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    openInput = () => {
        this.setState({ disabled: false })
    }

    render() {
        checkAuth(this.props);
        const { userInfo } = this.state
        return (
            <div >
                {this.state.loading?
                <div style={{marginTop: '10%'}}>
                <Spinner animation="grow" />
                </div>
                :
                <div>
                <Avatar size={150} icon="user" />
                <br />
                <h3>
                    {`${userInfo.first_name}  ${userInfo.last_name}`}
                </h3>
                <hr />
                <Form layout="inline">
                    <Form.Item >
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={userInfo.nickname}
                            disabled={this.state.disabled} />

                        <Form.Item>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
                            type="email"
                            placeholder={userInfo.email}
                            disabled
                            width={640} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
                            type="password"
                            placeholder="**********"
                            disabled
                            width={640}
                        /><Forgetpasswor />
                        <Form.Item>
                        </Form.Item>
                    </Form.Item>
                    <hr /><br />
                    <Provided_items />
                    <br /><br />
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 5}}><Add_items /></Col>
                        <Col><Remove_items /></Col>
                    </Row>
                    <hr /><br />
                    <Requested_items />
                    <br /><br />
                    <Return_item />
                    <br /><br /><br /><br /><br />
                </Form>
                </div>
                }
            </div>
        )
    }
}
