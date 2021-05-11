import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import User from "./User";
import { GiTrophyCup } from "react-icons/gi";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1
          style={{
            fontFamily: "Century Gothic,Lucida Sans",
            textAlign: "center",
          }}
        >
          Example heading <GiTrophyCup />
        </h1>{" "}
        {Object.keys(this.props.users).map((user) => {
          return <User user={user} />;
        })}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
