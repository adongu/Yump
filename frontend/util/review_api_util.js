export const fetchReviews = () => {
  return $.ajax({
    METHOD: "GET",
    url: `api/reviews`
  })
}

export const fetchReview = (id) => {
  return $.ajax({
    METHOD: "GET",
    url: `api/reviews/${id}`
  })
}

export const createReview = (review) => {
  return $.ajax({
    METHOD:"POST",
    url: "api/reviews",
    data: { review }
  })
}

export const updateReview = (review) => {
  return $.ajax({
    METHOD:"PATCH",
    url: `api/reviews/${review.id}`,
    data: { review }
  })
}

export const deleteReview = (id) => {
  return $.ajax({
    METHOD:"DELETE",
    url: `api/reviews/${id}`
  })
}
