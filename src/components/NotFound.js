import React, { Component } from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <BiError size={"15%"} />
        <h1>404 Question Not Found</h1> <Link to="/">Return to Home Page</Link>
      </div>
    );
  }
}
