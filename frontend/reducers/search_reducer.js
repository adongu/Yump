import { RECEIVE_RESULTS } from '../actions/search_actions';
import { merge } from "lodash";

const _NullSearch = {
  results: [],
  errors: []
}

const SearchReducer = (preLoadedState = _NullSearch, action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
      let results = action.results
      return merge({}, preLoadedState, { results } )
    default:
      return preLoadedState;
  }

}

export default SearchReducer
