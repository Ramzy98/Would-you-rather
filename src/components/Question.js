import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Question extends Component {
  render() {
    return (
      <div>
        <Card>{this.props.id}</Card>
      </div>
    );
  }
}
