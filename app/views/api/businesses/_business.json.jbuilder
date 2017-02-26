json.extract! business, :id, :name, :street, :city, :state, :price, :zip, :phone, :latitude, :longitude
json.image_url asset_path(business.image.url)
reviewsArray = business.reviews
json.review_count(reviewsArray.length)
json.ratings business.averageRating

json.reviews business.reviews do |review|
  # json.extract! review, :id, :created_at, :rating, :review
  json.id review.id
  json.created_at review.created_at.strftime("%m/%d/%Y")
  json.rating review.rating
  json.review review.review
  json.image_url asset_path(review.image.url)


  json.reviewer do
    json.extract! review.reviewer, :id, :f_name, :l_name, :zip
  end
end

json.tags business.tags do |tag|
  json.extract! tag, :id, :tag
end
