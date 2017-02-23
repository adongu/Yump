json.extract! business, :id, :name, :street, :city, :state, :price, :zip, :phone, :latitude, :longitude
# json.image_url asset_path(user.image.url)
reviewsArray = business.reviews
json.review_count(reviewsArray.length)

json.reviews business.reviews do |review|
  # json.extract! review, :id, :created_at, :rating, :review
  json.rating review.rating
  json.review review.review
end

json.tags business.tags do |tag|
  json.extract! tag, :id, :tag
end
