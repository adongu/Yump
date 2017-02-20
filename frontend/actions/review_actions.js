import * as APIUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

const receiveAllReviews = (reviews) => {
  type: RECEIVE_ALL_REVIEWS,
  reviews
}

const receiveReview = (review) => {
  type: RECIEVE_REVIEW,
  review
}

const updateReview = (review) => {
  type: UPDATE_REVIEW,
  review
}

const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then((reviews) => dispatch(receiveAllReviews(reviews)));
}
