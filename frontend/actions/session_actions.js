import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

const receiveErrors = (errors) => {
  type: receiveErrors,
  errors
}

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then((user) => dispatch(signup(user)))
};

export const login = (user) => dispatch => {
  return APIUtil.login(user).then((user) => dispatch(login(user)))
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logout()))
};
