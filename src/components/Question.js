import React, { Component } from "react";
import { Card, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

class Question extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "3.5%", paddingBottom: "5%" }}>
        {this.props.id ? (
          <Card style={{ width: "95%" }}>
            <Card.Header>{this.props.user.name} asks</Card.Header>{" "}
            <div>
              <div style={{ top: "100%" }}>
                <Image
                  style={{
                    padding: "0.1rem",
                    width: "20%",
                    pointerEvents: "none",
                    float: "left",
                    postion: "inherit",
                  }}
                  size="xs"
                  src={this.props.user.avatarURL}
                  roundedCircle
                />
              </div>
              <hr
                style={{
                  border: "none",
                  borderLeft: "1px solid hsla(200, 10%, 50%,100)",
                  height: "6rem",
                  width: "1px",
                  float: "left",
                  postion: "fixed",
                }}
              />
              <h5 style={{ paddingTop: "1%", paddingLeft: "22%" }}>
                Would you rather
              </h5>{" "}
              <p style={{ color: "#808080", paddingLeft: "22%", content: "a" }}>
                {"..." + this.props.QInfo.optionOne.text + "..."}
              </p>{" "}
              <div style={{ paddingLeft: "21%", paddingRight: "1%" }}>
                <Link
                  to={`/questions/${this.props.QInfo.id}`}
                  className="nav-link"
                >
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
                </Link>
              </div>
            </div>
          </Card>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser, users }, { id }) {
  return {
    QInfo: id ? questions[id] : null,
    authedUser,
    user: users[questions[id].author],
    questions,
  };
}
export default connect(mapStateToProps)(Question);
