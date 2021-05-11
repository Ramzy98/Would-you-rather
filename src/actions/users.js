import { _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_USER = "RECEIVE_USER";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION_USER = "ADD_QUESTION";
function receiveUsers(users) {
  return {
    type: RECEIVE_USER,
    users,
  };
}

function changeAddUserAnswer(authedUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
function addQuestion(author, qid) {
  return {
    type: ADD_QUESTION_USER,
    author,
    qid,
  };
}
export function handleReceiveUsers() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers().then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}
export function handleChangeAddUserAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(changeAddUserAnswer(authedUser, qid, answer));
  };
}

export function handleAddQuestionUser(author, qid) {
  return (dispatch) => {
    dispatch(addQuestion(author, qid));
  };
}
