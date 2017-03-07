import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

const removeReview = (review) => {
  console.log("hit removeReview", review);
  return {
    type: REMOVE_REVIEW,
    review
  }
}

export const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then((reviews) => dispatch(receiveAllReviews(reviews)));
}

export const fetchReview = (id) => dispatch => {
  return APIUtil.fetchReviews(id).then((review) => dispatch(receiveReview(review)));
}


export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review)
    .then((review) => {
      return dispatch(receiveReview(review)
    )})
}

export const updateReview = (id) => dispatch => {
  return APIUtil.updateReview(id).then((review) => dispatch(receiveReview(review)));
}

export const deleteReview = (review) => dispatch => {
  return APIUtil.deleteReview(review).then((review) =>  dispatch(removeReview(review)));
}
