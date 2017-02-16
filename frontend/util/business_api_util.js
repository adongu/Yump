export const fetchBusinesses = () => {
  return $.ajax({
    METHOD: "GET",
    url: `api/businesses`
  })
}

export const fetchBusiness = (id) => {
  return $.ajax({
    METHOD: "GET",
    url: `api/businesses/${id}`
  })
}
