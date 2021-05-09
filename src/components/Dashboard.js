import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {console.log(this.props, "sdddddddddddddddddddd")}
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
