import { merge } from "lodash";

export default const SessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = { currentUser: action.currentUser, errors: []}
      return merge({}, oldState, currentUser);
    case RECEIVE_ERRORS:
      let currentUser = { currentUser: "", errors: action.console.errors}
      let newState = merge({}, oldState, currentUser)
      return action.errors;
    default:
      return oldState
  }
};
