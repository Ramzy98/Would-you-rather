import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class AnsweredQuestions extends Component {
  render() {
    return (
      <div>
        <h4
          style={{
            textAlign: "center",
            color: "#1E90FF",
            fontFamily: "Century Gothic,Lucida Sans",
          }}
        >
          Answered Questions
        </h4>
        {this.props.answeredQuestions.map((question) => (
          <Question key={question} id={question} />
        ))}
      </div>
    );
  }
}
function mapStateToProps({ questions, authedUser }) {
  let answeredQuestions = Object.keys(questions).filter(
    (question) =>
      questions[question].optionOne.votes.includes(authedUser) ||
      questions[question].optionTwo.votes.includes(authedUser)
  );
  return { answeredQuestions, authedUser };
}
export default connect(mapStateToProps)(AnsweredQuestions);
