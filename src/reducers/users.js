import { RECEIVE_USER } from "../actions/users";
import { ADD_USER_ANSWER } from "../actions/users";
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, ...action.users };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    /*case ADD_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: { ...state[action.questions], ...action.qid },
        },
      };*/
    default:
      return state;
  }
}
