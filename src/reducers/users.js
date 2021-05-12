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

    default:
      return state;
  }
}
