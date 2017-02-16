import React from 'react';
import * from APIUtil from '../util/business_api_util';


export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESSES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const showBusinesses = () => dispatch => {
  return (
    APIUtil.fetchBusinesses()
    .then( (businesses) => dispatch(receiveAllBusinesses(businesses)));
  )
}

export const showBusiness = (id) => dispatch => {
  return (
    APIUtil.fetchBusiness(id)
    .then( (business) => dispatch(receivelBusiness(business)));
  )
}

const receiveAllBusinesses = (businesses) => {
  type: RECEIVE_ALL_BUSINESSES,
  businesses
}

const receiveBusiness = (business) => {
  type: RECEIVE_BUSINESS,
  business
}

const receiveErrors = (errors) => {
  type: RECEIVE_ERRORS,
  errors
}
