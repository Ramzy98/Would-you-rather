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
        {this.props.UnansweredQuestions.map((question) => (
          <Question key={question} id={question} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser }) {
  let UnansweredQuestions = Object.keys(questions).filter(
    (question) =>
      !questions[question].optionOne.votes.includes(authedUser) &&
      !questions[question].optionTwo.votes.includes(authedUser)
  );
  return { UnansweredQuestions, authedUser };
}
export default connect(mapStateToProps)(UnansweredQuestions);
