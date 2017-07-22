import axios from 'axios';

export const fetchBusinesses = () => {
  // return $.ajax({
  //   METHOD: "GET",
  //   url: `api/businesses`
  // })

  return axios.get(`api/businesses`)
}

export const fetchBusiness = (id) => {
  // return $.ajax({
  //   METHOD: "GET",
  //   url: `api/businesses/${id}`
  // })
  return axios.get(`api/businesses/${id}`)
}
