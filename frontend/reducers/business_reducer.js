import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_ERRORS } from '../actions/business_actions';

import { merge } from 'lodash';

let _nullBusiness = Object.freeze({
  businesses: [],
  errors: []
});

const BusinessReducer = (preLoadedState = _nullBusiness, action) => {
  Object.freeze(preLoadedState);

  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      let businesses = action.businesses
      return merge({}, _nullBusiness, { businesses})
      case RECEIVE_BUSINESS:
      debugger
      let business = [action.business]
      return merge({}, _nullBusiness, { business })
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, _nullBusiness, { errors })
    default:
      return preLoadedState
  }
}

export default BusinessReducer;
