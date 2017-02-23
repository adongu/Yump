export const fetchResults = (queryString) => {
  console.log("hit ajax call", queryString)
  return $.ajax({
    method: "GET",
    url: "api/searches",
    data: {query: queryString}
  })
}
