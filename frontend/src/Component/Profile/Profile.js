import React, { Component } from 'react'
import { Avatar, Form, Icon, Input, Button } from 'antd';
import { checkAuth } from "../functionAuth";
import axios from "axios";
import Requested_items from './Requested_items'
import Provided_items from './Provided_items'

export default class Profile extends Component {
    state = {
        userInfo: '',
        password: ''
    }
    componentDidMount() {
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
    render() {
        checkAuth(this.props);
        const { userInfo } = this.state
        return (
            <div >
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
                            disabled
                        />
                        <Form.Item>
                            <Button onClick={this.changePass}>Change</Button>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
                            type="email"
                            placeholder={userInfo.email}
                            disabled
                            width={640}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
                            type="password"
                            placeholder="**********"
                            disabled
                            width={640}
                        />
                        <Form.Item>
                            <Button>Change</Button>
                        </Form.Item>
                    </Form.Item>
                    <hr /><br />
                    <Provided_items />
                    <br /><br />
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add Item</Button>
                    <hr /><br />
                    <Requested_items />
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="minus" /> Return Item</Button>
                </Form>
            </div>
        )
    }
}
