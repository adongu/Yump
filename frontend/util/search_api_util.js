export const fetchResults = (queryString) => {
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: {query: queryString}
  })
}
