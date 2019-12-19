import React, { Component } from 'react'
import { Modal } from 'antd';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import swal from "sweetalert";
import { Icon } from 'antd';

export default class Remove_items extends Component {

    state = {
        loading: false,
        visible: false,
        item_name: '',
        flag: false,
        item_id: ''
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ item_name: event.target.value })
    }
    handleSubmit = (event) => {
        const uid = localStorage.getItem("user_id");
        console.log(uid);
        event.preventDefault();
        console.log('submittied');
        axios
            .get(`/api/v1/items/${uid}/provided`)
            .then(res => {
                console.log(res.data)
                var all = res.data.map(s => {
                    console.log(s);
                    console.log(s._id);
                    console.log(s.item_name === this.state.item_name);
                    
                    if (s.item_name != s.item_name) {
                        this.setState({ flag: true, item_id: this.state._id })
                    }
                })
                if (this.state.flag) {
                    axios
                        .delete(`/${uid}/provided/${this.state.item_id}`)
                        .then((res)=>{
                            console.log(res);
                            swal({
                                title: "Delete Successfully ",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2500
                            }).then(window.location.href = "/profile")
                        }
                        )
                        .catch(err => console.log(err))

                } else {
                    swal({
                        title: "Item Not Found or Typed Wrong",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
            .catch(err => console.log(err));
    };
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}><Icon type="minus" />Remove Item</Button>
                <Modal
                    visible={visible}
                    title="Remove Item"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[]}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Enter Item to remove" value={this.state.item} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Ok</Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}
