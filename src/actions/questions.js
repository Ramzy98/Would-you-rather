import { _getQuestions } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
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
