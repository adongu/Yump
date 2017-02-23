import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from "lodash";

const UserReducer = (preloadedState = {}, action) => {
  Object.freeze(preloadedState)
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, preloadedState, action.user)
    default:
      return preloadedState;
  }
}

export default UserReducer;
