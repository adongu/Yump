import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge, pull } from 'lodash';

const _NullState = {
  reviews: []
  // review: "",
  // rating: null,
  // imageFile: null
}

const ReviewReducer = (preLoadedState = _NullState, action) => {
  let oldState = merge({}, preLoadedState)
  switch (action.type) {
    // case RECEIVE_REVIEW:
    //   return merge(oldState, { action.review })
    case REMOVE_REVIEW:
      let newReviews = oldState[reviews].filter((review) => review !== action.review )
      oldState[reviews] = newReviews;
      // console.log('oldState after: ', preLoadedState, deletedEle);
      return oldState;
    default:
      return preLoadedState;
  }
}

export default ReviewReducer;
