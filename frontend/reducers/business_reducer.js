import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_ERRORS } from '../actions/business_actions';
import {
  RECEIVE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW
} from '../actions/review_actions';

import { merge } from 'lodash';

let _nullBusiness = Object.freeze({
  businesses: [],
  currentBusiness: {
    reviews:[],
    tags:[]
  },
  errors: []
});

const BusinessReducer = (preLoadedState = _nullBusiness, action) => {
  Object.freeze(preLoadedState);
  let newState = merge({}, preLoadedState)
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      let businesses = action.businesses
      let businessesResult = merge({}, preLoadedState, {businesses: [...businesses]});
      return businessesResult;
    case RECEIVE_BUSINESS:
      let business = action.business;
      newState.currentBusiness = action.business
      // let businessResult = Object.assign({}, preLoadedState, { currentBusiness: business });
      return newState;
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, preLoadedState, errors)
    case RECEIVE_REVIEW:
      console.log("Hits RECEIVE_REVIEW", action.review)
      let review = action.review;
      newState.currentBusiness.reviews.push( review )
      // let businessReviews = Object.assign({}, preLoadedState, { currentBusiness: {reviews: review }});
      return newState;
    case DELETE_REVIEW:

      delete newState.currentBusiness.reviews[ action.review ];
      return newState
    default:
      return preLoadedState
  }
}

export default BusinessReducer;
