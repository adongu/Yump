import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_ERRORS } from '../actions/business_actions';
import {
  RECEIVE_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW
} from '../actions/review_actions';

import { merge, pull } from 'lodash';

let _nullBusiness = Object.freeze({
  businesses: [],
  currentBusiness: {
    reviews:[],
    tags:[]
  },
  errors: []
});

const BusinessReducer = (oldState = _nullBusiness, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState)
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      let businesses = action.businesses
      let businessesResult = merge({}, oldState, {businesses: [...businesses]});
      return businessesResult;
    case RECEIVE_BUSINESS:
      let business = action.business;
      newState.currentBusiness = action.business
      // let businessResult = Object.assign({}, oldState, { currentBusiness: business });
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, oldState, errors)
    case RECEIVE_REVIEW:
      let review = action.review;
      newState.currentBusiness.reviews.unshift( review )
      // let businessReviews = Object.assign({}, oldState, { currentBusiness: {reviews: review }});
      return newState;
    case REMOVE_REVIEW:
      let newReviews = newState.currentBusiness.reviews;

      newState.currentBusiness.reviews = newReviews.filter (review => {
          return review.id !== action.review.id;
      })
      return newState;
    default:
      return oldState
  }
}

export default BusinessReducer;
