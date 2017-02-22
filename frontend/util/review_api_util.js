export const fetchReviews = () => {
  return $.ajax({
    method: "GET",
    url: `api/reviews`
  })
}

export const fetchReview = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews/${id}`
  })
}

export const createReview = (formData) => {
  return $.ajax({
    method: "POST",
    url: "api/reviews",
    datatype: "json",
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateReview = (formData) => {
  return $.ajax({
    method:"PATCH",
    url: `api/reviews/${review.id}`,
    datatype: "json",
    contentType: false,
    processData: false,
    data: formData
  })
}

export const deleteReview = (id) => {
  return $.ajax({
    method:"DELETE",
    url: `api/reviews/${id}`
  })
}
