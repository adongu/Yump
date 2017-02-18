import { merge } from "lodash";
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
})

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser
      return merge({}, oldState, { currentUser });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _nullUser, { errors })
    case CLEAR_ERRORS:
      let nullError = {}
      return merge({}, oldState, { errors: nullError})
    default:
      return oldState
  }
};

export default SessionReducer;
