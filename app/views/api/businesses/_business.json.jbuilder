json.extract! business, :id, :name, :street, :city, :state, :price, :zip, :phone, :latitude, :longitude
json.image_url asset_path(business.image.url)
reviewsArray = business.reviews
json.review_count(reviewsArray.length)
json.ratings business.averageRating

# debugger
# sorts by updated_at first
json.reviews business.reviews.sort { |r_a, r_b| r_b.updated_at <=> r_a.updated_at } do |review|
  # json.extract! review, :id, :created_at, :rating, :review
  json.id review.id
  json.created_at review.created_at.strftime("%m/%d/%Y")
  json.rating review.rating
  json.review review.review
  json.image_url asset_path(review.image.url)


  json.reviewer do
    # json.extract! review.reviewer, :id, :f_name, :l_name, :zip
    json.id review.reviewer.id
    json.f_name review.reviewer.f_name
    json.l_name review.reviewer.l_name[0]
    json.zip review.reviewer.zip
  end
end

json.tags business.tags do |tag|
  json.extract! tag, :id, :tag
end
