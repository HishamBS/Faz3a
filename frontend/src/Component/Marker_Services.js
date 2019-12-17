import React, { Component } from 'react'
import '../CSS/Marker.css';
import Chat from './Chat'
import Items from './Items'
import { Popover, Avatar, Modal, Button } from 'antd'
import Axios from "axios";

export default class Marker_Services extends Component {
    state = {
        loading: false,
        visible: false,
        user: {},
        item: []
    };
    showModal = () => {
        Axios.get("/api/v1/users")
        .then(user => {
            var usersData = user.data.map((single_user) => {
                return single_user 
            })
            var user_click = usersData.filter( u => u.nickname == this.props.name);
            this.setState({
                user: user_click[0],
                 visible: true
              })
              console.log(this.state.user);

              Axios.get(`/api/v1/items/${this.state.user._id}/provided`)
              .then( items => {
                  this.setState({item: items.data})

              })
              .catch(err => console.log(err));
        })

    };

    handleOk = () => {
        this.setState({ loading: true, flag: false});
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

  

    render() {
        const { color, name } = this.props;
        const { visible, loading, flag } = this.state;
        var allitem = this.state.item.map( single => {
            console.log(single);
            return <Items items={single}/>
        })
        return (
            <div>
                <Popover title={<Avatar style={{ alignContent: "center" }} icon="user" />} trigger="hover"
                    content={
                        <div>
                            <p style={{ textAlign: "center" }}>{name}</p>
                            <div>
                                <Button type="primary" onClick={this.showModal}>Show Item Provided</Button>
                            </div>
                        </div>
                    }>
                    <div
                        className="pin bounce"
                        style={{ backgroundColor: color, cursor: 'pointer' }}
                        title={name}
                    />
                    <div className="pulse" />
                </Popover>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Chat />]}>
                    <p>{allitem}</p>
                </Modal>
            </div>
        )
    }
}
