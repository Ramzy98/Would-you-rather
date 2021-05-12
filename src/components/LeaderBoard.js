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
          Leader Board
          <GiTrophyCup />
        </h1>{" "}
        {this.props.sorted.map((user) => {
          return (
            <User
              user={this.props.users[user]}
              index={this.props.sorted.indexOf(user)}
            />
          );
        })}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    sorted: Object.keys(users)
      .sort(
        (a, b) =>
          users[a].answers.length +
          users[a].questions.length -
          (users[b].answers.length + users[b].questions.length)
      )
      .reverse(),
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
