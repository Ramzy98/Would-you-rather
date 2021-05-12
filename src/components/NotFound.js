import React, { Component } from "react";
import { BiError } from "react-icons/bi";

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <BiError size={"15%"} />
        <h1>404 Page Not Found</h1>
      </div>
    );
  }
}
