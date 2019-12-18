import React, { Component } from 'react'
import { Modal } from 'antd';
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import swal from "sweetalert";

export default class forgetpass extends Component {
    state = {
        loading: false,
        visible: false,
        password: ''
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleSubmit = (event) => {
        const uid = localStorage.getItem("user_id");
        console.log(uid);
        event.preventDefault();
        console.log(this.state.password);
        console.log('subnittied');
        var body = {
            password: this.state.password
        }
        axios
            .put(`/api/v1/users/editpassword/${uid}`, body)
            .then(res => {
                swal({
                    title: "Updated successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2500
                }).then(this.handleCancel)
            })
            .catch(err => console.log(err));
    };
    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Change Password</Button>
                <Modal
                    visible={visible}
                    title="Change Password"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Back</Button>]}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicPassword">

                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="Current Password"/>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" value={this.state.password} onChange={this.handleChangePassword} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Ok</Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}
