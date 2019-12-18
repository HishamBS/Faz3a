import React, { Component } from "react";
import "../CSS/Marker.css";
import Chat from "./Chat";
import Items from "./Items";
import { Popover, Avatar, Modal } from "antd";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import swal from "sweetalert";

class Marker_Services extends Component {
  state = {
    loading: false,
    visible: false,
    user: {},
    item: [],
    item_cheacked: []
  };
  showModal = () => {
    axios.get("/api/v1/users").then(user => {
      var usersData = user.data.map(single_user => {
        return single_user;
      });
      var user_click = usersData.filter(u => u.nickname == this.props.name);
      this.setState({
        user: user_click[0],
        visible: true
      });
      console.log(this.state.user);

      axios
        .get(`/api/v1/items/${this.state.user._id}/provided`)
        .then(items => {
          this.setState({ item: items.data });
        })
        .catch(err => console.log(err));
    });
  };

  handleOk = () => {
    this.setState({ loading: true, flag: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  isChecked = value => {
    console.log(value);
    this.setState({
      item_cheacked: [...this.state.item_cheacked, value]
    });
    console.log(this.state.item_cheacked);
  };
  render() {
    const { color, name } = this.props;
    const { visible } = this.state;

    var allitem = this.state.item.map(single => {
      return <Items items={single} isChecked={this.isChecked} />;
    });
    return (
      <div>
        <Popover
          title={<Avatar style={{ alignContent: "center" }} icon="user" />}
          trigger="hover"
          content={
            <div>
              <p style={{ textAlign: "center" }}>{name}</p>
              <div>
                <Button type="primary" onClick={this.showModal}>
                  Show Item Provided
                </Button>
              </div>
            </div>
          }
        >
          <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: "pointer" }}
            title={name}
          />
          <div className="pulse" />
        </Popover>
        {console.log(this.state.user)}
        <Modal
          visible={visible}
          title={name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,

            <Button
              onClick={() => {
                if (localStorage.user_id != this.state.user._id) {
                  axios
                    .post(
                      `/api/v1/users/chats/${localStorage.user_id}/rec/${this.state.user._id}`
                    )
                    .then(res => {
                      console.log(res.data);
                      window.location.href = `/messages/${this.state.user._id}`;
                    });
                } else {
                  swal({
                    title: "Are You Kidding Me🤬",
                    text: "How can you have a chat with yourself",
                    icon: "error",
                    button: "sorry"
                  });
                }
              }}
            >
              Talk To Me
            </Button>
          ]}
        >
          <p>{allitem}</p>
        </Modal>
      </div>
    );
  }
}
export default withRouter(Marker_Services);
