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

export const createReview = (formData) => {
  return $.ajax({
    METHOD:"POST",
    url: "api/reviews",
    datatype: "json",
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateReview = (formData) => {
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
