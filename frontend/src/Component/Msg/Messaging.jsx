import "./main.css";
import React from "react";
import {
  Form,
  ListGroup,
  Container,
  Button,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  DropdownButton
} from "react-bootstrap";
import axios from "axios";
import { checkAuth } from "../functionAuth";
import NavBarComp from '../main/NavBarComp'
class ChatScreen extends React.Component {
  lastMessage = null;

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: [],
      selectUser: null,
      colorSelect: 0,
      provided_items: [],
      btnTitle: "click to choose an item",
      selectedProvidedItem: ""
    };
  }

  ScrollToBottom() {
    if (this.lastMessage) this.lastMessage.scrollIntoView();
  }

  componentDidMount() {
    checkAuth(this.props);

    axios
      .get(`/api/v1/users/chats/${localStorage.getItem(`user_id`)}`)
      .then(allChats => {
        console.log(allChats.data.chats);
        this.setState({
          arrayOfChats: allChats.data.chats
        });
        console.log(allChats.data.chats);
        let users = { ...this.state };
        allChats.data.chats.forEach(ele => {
          console.log(ele.user1._id);
          console.log(localStorage.user_id);

          if (localStorage.user_id == ele.user1._id) {
            users.users.push({ name: ele.user2.nickname, id: ele.user2._id });
          } else {
            users.users.push({ name: ele.user1.nickname, id: ele.user1._id });
          }
        });
        this.setState(users);
      })
      .catch(err => console.log(err));

    var messages = [];

    this.setState(
      {
        messages: messages
      },
      () => {
        this.ScrollToBottom();
      }
    );
  }

  handleRequest = () => {
    axios
      .put(
        `api/v1/items/request/${localStorage.user_id}/${this.state.selectedProvidedItem}/`
      )
      .then(result => {
          window.location.href = '/profile'
          
      });
  };
  selectUserHadelr = ({ target }) => {
    axios.get(`/api/v1/items/${target.style.id}/provided/`).then(res => {
      this.setState({ provided_items: res.data });
      console.log(this.state.provided_items);
    });

    var oneUser = this.state.arrayOfChats.filter(ele => {
      return (
        ele.user2._id == target.style.id || ele.user1._id == target.style.id
      );
    });
    console.log( oneUser[0]);
    
    this.setState({
      selectUser: oneUser[0],
      colorSelect: parseInt(target.style.i),
      messages: oneUser[0].messages.map(ele => {
        if (localStorage.user_id == ele.sender) {
          return { message: ele.message_body, author: "me" };
        }
        return { message: ele.message_body, author: target.ali };
      })
    });
    console.log(this.state.selectUser);
  };
  render() {
    console.log(this.state.selectUser);

    return (
      <div>
        <NavBarComp />
                <hr />
                <br />
        <Row className="justify-content-md-center">
          <Container
            style={{ marginTop: 30, backgroundColor: "#fff", padding: "1em" }}
          >
            <Row>
              <Col>
                <div className={"text-right"}></div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col lg="3">
                <div style={{ maxHeight: "500px" }}>
                  <ListGroup style={{ cursor: "pointer"  }}>
                    {this.state.users.map((u, index) => {
                      var bgColor =
                        index === this.state.colorSelect ? "#7187ee" : "";
                      var textColor =
                        index === this.state.colorSelect ? "#fff" : "";

                      return (
                        <ListGroup.Item
                          style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            ali: u.name,
                            id: u.id,
                            i: index
                          }}
                          as={"li"}
                          onClick={this.selectUserHadelr}
                        >
                          {u.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
              </Col>
              <Col lg="9">
                <Row>
                  <Col lg={12}>
                    <div className={"message-author"}>
                      <h3>
                        {this.state.selectUser !== null && (
                          <>
                            {" "}
                            {this.state.selectUser.user2._id ==
                            localStorage.user_id
                              ? this.state.selectUser.user1.nickname
                              : this.state.selectUser.user2.nickname}{" "}
                          </>
                        )}
                        <Container>
                          {this.state.selectUser !== null &&
                            this.state.selectUser.user2._id !=
                              localStorage.user_id && (
                              <div>
                                <div>
                                  <h6>
                                    Please select from the menu the item you
                                    want
                                  </h6>{" "}
                                  <h6>
                                    only choose when the provider gives the 👍{" "}
                                  </h6>
                                </div>
                                <DropdownButton
                                  id="dropdown-basic-button"
                                  title={this.state.btnTitle}
                                  onClick={e => {
                                    this.setState({
                                      selectedProvidedItem: e.target.name
                                    });
                                    this.setState({ btnTitle: e.target.text });
                                  }}
                                >
                                  
                                  {this.state.provided_items.map(e => {
                                    return (
                                        e.item_status == "available"? 
                                      <Dropdown.Item
                                        name={e._id}
                                      >
                                        {e.item_name}🟢
                                      </Dropdown.Item>
                                        :<h6 style={{textAlign:"center"}}>{e.item_name}🔴</h6>
                                    )
                                  })}
                                </DropdownButton>
                                {this.state.selectedProvidedItem && (
                                  <Button onClick={this.handleRequest}>
                                    Send Request
                                  </Button>
                                )}
                              </div>
                            )}
                        </Container>
                      </h3>
                    </div>
                  </Col>
                </Row>
                <div
                  style={{
                    height: "450px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                  }}
                >
                  <Row>
                    <Col lg={12}>
                      {this.state.messages.map((msg, index) => {
                        var classNames =
                          msg.author === "me"
                            ? "message-left"
                            : "message-right";

                        return (
                          <div
                            key={"el" + index}
                            className={"message"}
                            ref={el => (this.lastMessage = el)}
                          >
                            <div className={"message-body " + classNames}>
                              {msg.message}
                            </div>
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3} />
              <Col>
                <div style={{ marginTop: "1em" }}>
                  <Form.Control
                    onKeyUp={event => {
                      if (
                        event.keyCode === 13 &&
                        event.target.value.trim() !== ""
                      ) {
                        axios
                          .post(`/api/v1/users/chats/response`, {
                            group_id: this.state.selectUser._id,
                            sender: localStorage.user_id,
                            message: event.target.value
                          })
                          .then(res => console.log(res));
                        this.setState(
                          {
                            messages: this.state.messages.concat({
                              author: "me",
                              message: event.target.value
                            })
                          },
                          () => {
                            this.ScrollToBottom();
                          }
                        );

                        event.target.value = "";
                      }
                    }}
                    type="text"
                    placeholder="Type your message here .. press enter to send"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <br /><br /><br /><br />
      </div>
    );
  }
}

export default ChatScreen;
