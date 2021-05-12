import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class UnansweredQuestions extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            textAlign: "center",
            color: "red",
            fontFamily: "Century Gothic,Lucida Sans",
          }}
        >
          Unanswered Questions
        </h4>
        {this.props.sortable.map((question) => (
          <Question key={question} id={question[1].id} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser }) {
  let UnansweredQuestions = Object.keys(questions)
    .filter(
      (question) =>
        !questions[question].optionOne.votes.includes(authedUser) &&
        !questions[question].optionTwo.votes.includes(authedUser)
    )
    .map((question) => {
      return {
        id: questions[question].id,
        timestamp: questions[question].timestamp,
      };
    });
  var sortable = [];
  for (var vehicle in UnansweredQuestions) {
    sortable.push([vehicle, UnansweredQuestions[vehicle]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  sortable.reverse();

  return {
    sortable,
    authedUser,
  };
}
export default connect(mapStateToProps)(UnansweredQuestions);
