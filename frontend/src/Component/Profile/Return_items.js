import React, { Component } from 'react'
import { Modal } from 'antd';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import swal from "sweetalert";
import { Icon } from 'antd';

export default class Return_items extends Component {
    state = {
        loading: false,
        visible: false,
        item_name: '',
        item_description: '',
        user: []
    };
    componentDidMount() {
        let user = localStorage.getItem('user_id')
        // axios
        //     .get(`/api/v1/items/${user}/provided`)
        //     .then(user => {
        //         console.log(user);
        //         this.setState({ user: user.data })
        //     })
        //     .catch(err => console.log(err));
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleChangeName = (event) => {
        console.log(event.target.value);
        this.setState({ item_name: event.target.value })
    }

    handleSubmit = (event) => {
        const uid = localStorage.getItem("user_id");
        console.log(uid);
        event.preventDefault();
        console.log('subnittied');
        // var body = {
        //     item_name: this.state.item_name,
        //     item_description: this.state.item_description,
        //     belongs_to_user: uid
        // }
        // axios
        //     .put(`/api/v1/items/${uid}/provided`, body)
        //     .then(res => {
        //         swal({
        //             title: "Added successfully",
        //             icon: "success",
        //             showConfirmButton: false,
        //             timer: 2500
        //         }).then(this.handleCancel)
        //     })
        //     .catch(err => console.log(err));
    };
    render() {
        const { visible } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}><Icon type="minus" />Return Item</Button>
                <Modal
                    visible={visible}
                    title="Return Item"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Back</Button>]}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={this.state.item} onChange={this.handleChangeName} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Ok</Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}
