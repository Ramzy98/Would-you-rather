import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";
function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function submitAnswer(authedUser, qid, answer) {
  return {
    type: SUBMIT_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
function addQuestion({ id, author, optionOne, optionTwo, timestamp }) {
  return {
    type: ADD_QUESTION,
    id,
    author,
    optionOne,
    optionTwo,
    timestamp,
  };
}
export function handleReceiveQuestions() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSubmitAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(submitAnswer(authedUser, qid, answer));
    return _saveQuestionAnswer({ authedUser, qid, answer }).catch((e) => {
      if (answer === "optionOne") {
        dispatch(submitAnswer(authedUser, qid, "optionTwo"));
      } else {
        dispatch(submitAnswer(authedUser, qid, "optionOne"));
      }
      console.warn("Error: ", e);
      alert("There was an error: ", e);
    });
  };
}
export function handleAddQuestion(author, optionOneText, optionTwoText) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ author, optionOneText, optionTwoText }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(hideLoading());
      }
    );
  };
}
