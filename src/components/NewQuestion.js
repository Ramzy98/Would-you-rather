import React, { Component } from "react";
import NavBar from "./NavBar";
import { Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router";

class NewQuestion extends Component {
  state = {
    query: {
      optionOne: "",
      optionTwo: "",
    },
    toHome: false,
  };
  updateQueryOne = (optionOne) => {
    this.setState(() => ({
      query: { ...this.state.query, optionOne: optionOne },
    }));
  };
  updateQueryTwo = (optionTwo) => {
    this.setState(() => ({
      query: { ...this.state.query, optionTwo: optionTwo },
    }));
  };
  render() {
    if (this.state.toHome === true) return <Redirect to="/" />;
    const optionOne = this.state.query.optionOne;
    const optionTwo = this.state.query.optionTwo;

    return (
      <div>
        <NavBar />{" "}
        <Card style={{ margin: "auto", width: "50%" }}>
          <Card.Header as="h5">Create new question</Card.Header>
          <Card.Body>
            <Card.Title>Would you rather</Card.Title>
            <Form.Control
              value={optionOne}
              onChange={(e) => this.updateQueryOne(e.target.value)}
              type="text"
              placeholder="Option 1"
            />
            <h5 style={{ textAlign: "center" }}>OR</h5>
            <Form.Control
              value={optionTwo}
              onChange={(e) => this.updateQueryTwo(e.target.value)}
              type="text"
              placeholder="Option 2"
            />
            <br />
            <Button
              block
              onClick={() => {
                this.setState({
                  toHome: true,
                  ...this.state.query,
                });
                this.props.dispatch(
                  handleAddQuestion(this.props.authedUser, optionOne, optionTwo)
                );
              }}
              style={{ textAlign: "center" }}
              variant="primary"
            >
              Add
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewQuestion);
