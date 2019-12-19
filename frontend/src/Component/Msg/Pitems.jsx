import React, { Component } from "react";
import { Form, ListGroup, Container, Button, Row, Col ,Dropdown , ButtonGroup} from "react-bootstrap";

export default class Pitems extends Component {
  render() {
    return (
      <div>
        
            <Dropdown.Item href="#/action-1">{this.props.items.item_name}</Dropdown.Item>
      
      </div>
    );
  }
}
