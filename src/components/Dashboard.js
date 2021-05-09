import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class Dashboard extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(Dashboard);
