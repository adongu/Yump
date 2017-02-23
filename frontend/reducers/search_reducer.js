import { RECEIVE_RESULTS } from '../actions/search_actions';
import { merge } from "lodash";

const _NullSearch = {
  results: [],
  errors: []
}

const SearchReducer = (oldState = _NullSearch, action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
    console.log("hit reducer", action.results);
    // debugger
      let results = action.results
      return Object.assign({}, {results: action.results} )
    default:
      return oldState;
  }

}

export default SearchReducer
