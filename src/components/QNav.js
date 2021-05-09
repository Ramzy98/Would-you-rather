import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
  color: "white",
  fontFamily: "Century Gothic,Lucida Sans",
};
export default class QNav extends Component {
  render() {
    return (
      <Container style={{ positon: "relative" }}>
        <Nav className="ml-auto" fill variant="tabs">
          <div
            style={{
              backgroundColor: "#0044cc",
            }}
          >
            <Nav.Item>
              <Link to="/Home" style={style} className="nav-link">
                Answered Questions
              </Link>
            </Nav.Item>{" "}
          </div>{" "}
          <div
            style={{
              backgroundColor: "#ff0000",
            }}
          >
            <Nav.Item>
              <Link to="/Home" style={style} className="nav-link">
                Unanswered Questions
              </Link>{" "}
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    );
  }
}
