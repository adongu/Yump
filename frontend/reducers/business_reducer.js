import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_ERRORS } from '../actions/business_actions';

import { merge } from 'lodash';

let _nullBusiness = Object.freeze({
  businesses: [],
  currentBusiness: {},
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
      console.log("hit reducer", business)
      return businessResult;
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, preLoadedState, errors)
    default:
      return preLoadedState
  }
}

export default BusinessReducer;
