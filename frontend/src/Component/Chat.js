import React, { Component } from 'react'
import { Drawer, Button, Icon, Checkbox } from 'antd';
import swal from 'sweetalert';
import '../CSS/chat.css'

export default class Chat extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked){
            swal({
                title: "Confirmd successfully",
                icon: "success",
                timer: 2500
            }).then(this.onClose())
        }
      }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer} >
                <Icon style={{ width: '100%' , height: '100%' }} type="wechat" />
              </Button>
                <Drawer
                    title="Chat"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={640}
                >
                    <div class="container">
                        <Icon type="user" />
                        <p>Hello. How are you today?</p>
                        <span class="time-right">11:00</span></div>

                    <div class="container darker">
                        <Icon type="user" />
                        <p>Hey! I'm fine. Thanks for asking!</p>
                        <span class="time-left">11:01</span></div>

                    <div class="container">
                        <Icon type="user" />
                        <p>Sweet! So, what do you wanna do today?</p>
                        <span class="time-right">11:02</span></div>

                    <div class="container darker">
                        
                        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                        <span class="time-left">11:05</span></div>
                        <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                    <Button type="primary" onClick={this.onClose}>Search for another</Button>
                </Drawer>
            </div>
        );
    }
}
