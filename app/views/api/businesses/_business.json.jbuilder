json.extract! business, :id, :name, :street, :city, :state, :price, :zip, :phone, :latitude, :longitude, :reviews, :tags
# json.image_url asset_path(user.image.url)
json.review_count(business.reviews.length)
# json.rating(business.reviews.ratings.review.reduce/business.reviews.length)
json.review
