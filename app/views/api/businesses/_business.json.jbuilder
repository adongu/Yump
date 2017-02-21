json.extract! business, :id, :name, :street, :city, :state, :price, :zip, :phone, :latitude, :longitude, :reviewers, :reviews,:tags
# json.image_url asset_path(user.image.url)
reviewsArray = business.reviews
json.review_count(reviewsArray.length)

# json.rating(business.reviews.ratings.review.reduce/business.reviews.length)
