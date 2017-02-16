import React from 'react';
import * from APIUtil from '../util/business_api_util';


export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetch_businesses = () => dispatch => {
  return (
    APIUtil.fetchBusinesses()
    .then( (businesses) => dispatch(ReceiveAllBusinesses(businesses)));
  )
}

export const fetch_business = (id) => dispatch => {
  return (
    APIUtil.fetchBusiness(id)
    .then( (business) => dispatch(ReceiveAllBusinesses(business)));
  )
}

const ReceiveAllBusinesses = (businesses) => {
  type: RECEIVE_ALL_BUSINESSES,
  businesses
}

const ReceiveBusinesses = (business) => {
  type: RECEIVE_ALL_BUSINESSES,
  business
}

const ReceiveErrors = (errors) => {
  type: RECEIVE_ERRORS,
  errors
}
