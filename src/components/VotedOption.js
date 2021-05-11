import React, { Component } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { TiInputChecked } from "react-icons/ti";
export default class VotedOption extends Component {
  render() {
    return (
      <div style={{ cursor: "default", paddingLeft: "31%" }}>
        <Card
          bg={"Info".toLowerCase()}
          key={"Info"}
          text={"Info".toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "80%" }}
          className="mb-2"
        >
          <Card.Body>
            {" "}
            <h5>{this.props.text} </h5>
            <div
              style={{
                position: "absolute",
                right: "-72%",
                top: "-19%",
                color: "green",
              }}
            >
              <TiInputChecked size={"16%"} />
            </div>
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
