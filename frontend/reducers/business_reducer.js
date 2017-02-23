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

  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      let businesses = action.businesses
      let businessesResult = merge({}, preLoadedState, {businesses: [...businesses]});
      return businessesResult;
    case RECEIVE_BUSINESS:
      let business = action.business;
      let businessResult = merge({}, preLoadedState, { currentBusiness: business });
      return businessResult;
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, preLoadedState, errors)
    case RECEIVE_REVIEW:
      let review = action.review;
      let businessReviews = merge({}, preLoadedState, { currentBusiness: { reviews:[{ review }] }});
      return businessReviews;
    case DELETE_REVIEW:
      let newState = merge({}, preLoadedState)
      delete newState[action.review];
      return newState
    default:
      return preLoadedState
  }
}

export default BusinessReducer;
