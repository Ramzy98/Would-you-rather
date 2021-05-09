import { _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_USER = "RECEIVE_USER";

function receiveUsers(users) {
  return {
    type: RECEIVE_USER,
    users,
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
