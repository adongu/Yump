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
      let currentUser = action.currentUser;
      return Object.assign({}, oldState, { currentUser, errors: [] });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return Object.assign({}, oldState, { errors: errors })
    case CLEAR_ERRORS:
      return Object.assign({}, { errors: []})
    default:
      return merge(oldState, { errors: []})
  }
};

export default SessionReducer;
