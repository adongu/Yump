import * as APITUtil from '../util/search_api_util';
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveResults = (results) => {
  type: RECEIVE_RESULTS,
  results
}

export const fetchResults = () => dispatch => {
  return APITUtil.fetchResults().then((results) => dispatch(receiveResults(results)))
}
