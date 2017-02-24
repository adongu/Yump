import * as APITUtil from '../util/search_api_util';
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveResults = (results) => {
  return {
    type: RECEIVE_RESULTS,
    results
  }
}

export const fetchResults = (query) => dispatch => {
  return APITUtil.fetchResults(query).then((results) => dispatch(receiveResults(results)))
}
