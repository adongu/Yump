import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "FETCH_USER";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = (id) => dispatch => {
  return APIUtil.fetchUser(id).then( (user) => { return dispatch(receiveUser(user))})
};
