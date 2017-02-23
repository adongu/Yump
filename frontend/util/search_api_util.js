export const fetchResults = () => {
  return $.ajax({
    method: "GET",
    url: "api/search"
  })
}
