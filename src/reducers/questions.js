import {
  RECEIVE_QUESTIONS,
  SUBMIT_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case SUBMIT_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          votes: state[action.qid][action.answer].votes.concat(
            action.autheUser
          ),
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.id]: action,
      };
    default:
      return state;
  }
}
