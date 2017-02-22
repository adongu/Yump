import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then((reviews) => dispatch(receiveAllReviews(reviews)));
}

export const fetchReview = (id) => dispatch => {
  return APIUtil.fetchReviews(id).then((review) => dispatch(receiveReview(review)));
}

export const createReview = (review) => dispatch => {
  return APIUtil.createReview(review)
    .then((review) => {
      // console.log("success after ajax", review)
      return dispatch(receiveReview(review)
    )})
}

export const updateReview = (id) => dispatch => {
  return APIUtil.updateReview(id).then((review) => dispatch(receiveReview(review)));
}

export const deleteReview = (id) => dispatch => {
  return APIUtil.deleteReview(id).then(() => dispatch(receiveReview(null)));
}
