import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/receive_actions';
import { merge } from 'lodash';

const _NullState = {
  reviews: [],
  review: "",
  rating: null,
  imageFile: null
}

const ReviewReducer = (preLoadedState = _NullState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEW:
      return merge({}, preLoadedState, { action.review })
    default:
      return preLoadedState;
  }
}

export default ReviewReducer;
