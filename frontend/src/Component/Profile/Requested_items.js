import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";
import "../../App.css";
import axios from "axios";

export default class Requested_items extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    let user = localStorage.getItem("user_id");
    axios
      .get(`/api/v1/items/${user}/requested`)
      .then(user => {
        this.setState({ user: user.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    var items = this.state.user.map(e => {
      return (
        <Input
          prefix={<Icon type="tool" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="text"
          value={`${e.item_name} ${
            e.item_status == "unavailable" ? "🟢" : "🔴"
          } ${
            e.item_status == "unavailable"
              ? ` owned by ${e.belongs_to_user?e.belongs_to_user.nickname:""}`
              : " "
          }`}
          placeholder={console.log(e)}
          disabled
        />
      );
    });
    return (
      <div>
        <h6>The Requested Item</h6>
        <div className="profile_layout">
          {items}
          <br />
          <br />
        </div>
      </div>
    );
  }
}
