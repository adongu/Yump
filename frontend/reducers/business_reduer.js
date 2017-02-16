import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESSES,
  RECEIVE_ERRORS } from '../actions/business_action';

import { merge } from 'lodash';

let _nullBusiness = Object.freeze({
  business: [],
  errors: []
});

const BusinessReducer = (preLoadedState = _nullBusiness, action) => {
  Object.freeze(preLoadedState);

  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      let bussinesses = action.businesses
      return merge({}, _nullBusiness, { businesses})
      case RECEIVE_BUSINESS:
      let bussiness = action.business
      return merge({}, _nullBusiness, { business })
    case RECEIVE_ERRORS:
      let errors = action.errors
      return merge({}, _nullBusiness, { errors })
    default:
      return preLoadedState
  }
}

export default BusinessReducer;
