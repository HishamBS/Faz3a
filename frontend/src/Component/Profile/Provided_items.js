import React, { Component } from "react";
import { Input, Icon, Button, Layout } from "antd";
import "../../App.css";
import axios from "axios";

export default class Provided_items extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    let user = localStorage.getItem("user_id");
    axios
      .get(`/api/v1/items/${user}/provided`)
      .then(user => {
          console.log(user.data);
          
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
            placeholder={
                console.log(e)
            }
          value={`${e.item_name} ${
            e.item_status == "available" ? "🟢" : "🔴"
          } ${
            e.item_status == "unavailable"
              ? ` requested by ${e.requested_by_user[0]!=null?e.requested_by_user[0].nickname:""}`
              : " "
          }`}
          disabled
        />
      );
    });
    return (
      <div>
        <h6>The Provided Item</h6>
        <div className="profile_layout">
          {items}
          <br />
          <br />
        </div>
      </div>
    );
  }
}
