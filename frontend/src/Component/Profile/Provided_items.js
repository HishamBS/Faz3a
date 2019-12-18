import React, { Component } from 'react'
import { Input, Icon, Button, Layout } from 'antd';
import '../../App.css';
import axios from "axios";


export default class Provided_items extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        let user = localStorage.getItem('user_id')
        console.log(user)
        axios
            .get(`/api/v1/items/${user}/provided`)
            .then(user => {
                this.setState({ user: user.data })
                console.log(this.state.user);

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
        console.log(this.state.user)
        return (
            <div>
                <h6>The Provided Item</h6>
                <div className="profile_layout">
                    {items}
                    <br />
                    <br />

                </div>
            </div>
        )
    }
}
