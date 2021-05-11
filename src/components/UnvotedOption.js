import React, { Component } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { handleSubmitAnswer } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class UnvotedOption extends Component {
  state = {
    toHome: false,
  };
  render() {
    if (this.state.toHome === true) return <Redirect to="/home" />;

    return (
      <div style={{ cursor: "pointer", paddingLeft: "31%" }}>
        <Card
          bg={"Danger".toLowerCase()}
          key={"Danger"}
          text={"Danger".toLowerCase() === "light" ? "dark" : "white"}
          style={{ height: "7rem", width: "80%" }}
          className="mb-2"
          onClick={() => {
            if (
              !this.props.question.optionOne.votes.includes(
                this.props.authedUser
              ) &&
              !this.props.question.optionTwo.votes.includes(
                this.props.authedUser
              )
            ) {
              this.props.dispatch(
                handleSubmitAnswer(
                  this.props.authedUser,
                  this.props.id,
                  this.props.option
                )
              );
              this.setState({
                toHome: true,
              });
            } else {
              alert("You've already voted!");
            }
          }}
        >
          <Card.Body>
            {" "}
            <Card.Text>
              <h5>{this.props.text} </h5>
            </Card.Text>
            <Card.Title>
              <ProgressBar
                now={Math.round(this.props.precentage)}
                label={`${Math.round(this.props.precentage)}%`}
              />{" "}
              <h6 style={{ paddingTop: "2%", textAlign: "center" }}>
                {this.props.current} of {this.props.total} votes
              </h6>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default connect()(UnvotedOption);
