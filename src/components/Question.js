import React, { Component } from "react";
import { Card, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "3.5%", paddingBottom: "5%" }}>
        <Card style={{ width: "95%" }}>
          <Card.Header>{this.props.user.name} asks</Card.Header>{" "}
          <div>
            <Image
              style={{
                padding: "0.5rem",
                width: "20%",
                pointerEvents: "none",
                float: "left",
              }}
              size="xs"
              src={this.props.user.avatarURL}
              roundedCircle
            />{" "}
            <hr
              style={{
                border: "none",
                borderLeft: "1px solid hsla(200, 10%, 50%,100)",
                height: "6rem",
                width: "1px",
                float: "left",
              }}
            />
            <h5 style={{ paddingTop: "1%", paddingLeft: "22%" }}>
              Would you rather
            </h5>{" "}
            <p style={{ paddingLeft: "22%", content: "a" }}>
              {"..." + this.props.QInfo.optionOne.text + "..."}
            </p>{" "}
            <div style={{ paddingLeft: "21%", paddingRight: "1%" }}>
              <Button
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
                block
                size="xs"
                variant="outline-info"
                type="submit"
              >
                View poll
              </Button>
            </div>
          </div>
        </Card>{" "}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, { id }) {
  return {
    QInfo: questions[id],
    authedUser,
    user: users[questions[id].author],
  };
}
export default connect(mapStateToProps)(Question);
