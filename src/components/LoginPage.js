import React, { Component } from "react";
import { Card, Button, Form, Dropdown, Image } from "react-bootstrap";
import reactReduxLogo from "../utils/reactReduxLogo.jpeg";
import { handleSetAuthedUser } from "../actions/authedUser";
import { handleReceiveUsers } from "../actions/users";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { Link } from "react-router-dom";

export class LoginPage extends Component {
  state = { name: "", id: "" };
  changeValue(text, id) {
    this.setState({ name: text, id: id });
  }
  componentDidMount() {
    document.title = "Login";
    this.props.dispatch(handleReceiveUsers());
  }

  render() {
    return (
      <div>
        {this.props.Loading ? (
          <LoadingBar style={{ backgroundColor: "blue" }} />
        ) : (
          <div
            style={{
              display: "flex",
              paddingTop: "1rem",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: "25rem" }}>
              <Card.Img size="xs" variant="top" src={reactReduxLogo} />
              <Card.Body>
                <Card.Title>Welcome to the would you rather app!</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicPassword">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" block>
                        {this.state.name ? this.state.name : "Login in As"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Object.keys(this.props.users).map((user) => {
                          return (
                            <div
                              key={this.props.users[user].id}
                              style={{ display: "block" }}
                            >
                              <Dropdown.Item
                                onClick={(e) =>
                                  this.changeValue(
                                    e.target.textContent,
                                    this.props.users[user].id
                                  )
                                }
                              >
                                <Image
                                  style={{
                                    width: "2rem",
                                    pointerEvents: "none",
                                  }}
                                  size="xs"
                                  src={this.props.users[user].avatarURL}
                                  roundedCircle
                                />
                                {"  "}
                                {this.props.users[user].name}
                              </Dropdown.Item>
                            </div>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                  <Link to="/home" className="nav-link">
                    {" "}
                    <Button
                      size="lg"
                      variant="primary"
                      type="submit"
                      disabled={this.state.name === ""}
                      onClick={() => {
                        this.props.dispatch(handleSetAuthedUser(this.state.id));
                      }}
                      block
                    >
                      Login
                    </Button>
                  </Link>{" "}
                </Form>
              </Card.Body>
            </Card>
          </div>
        )}{" "}
      </div>
    );
  }
}
function mapStateToProps({ users, loadingBar }) {
  return {
    users,
    Loading: loadingBar.default === 0 ? false : true,
  };
}

export default connect(mapStateToProps)(LoginPage);
