import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd';
import '../../App.css';
import axios from "axios";

export default class Requested_items extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        let user = localStorage.getItem('user_id')
        axios
            .get(`/api/v1/items/${user}/requested`)
            .then(user => {
                this.setState({ user: user.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        var items = this.state.user.map(e => {
            return <Input
                prefix={<Icon type="tool" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder={e.item_name}
                disabled
            />
        })
        return (
            <div>
                <h6>The Requested Item</h6>
                <div className="profile_layout">
                    {items}
                    <br />
                    <br />

                </div>
            </div>
        )
    }
}
