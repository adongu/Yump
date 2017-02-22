json.extract! review, :id, :user_id, :business_id, :review, :rating
json.image_url asset_path(review.image.url)
# json.image_url asset_path(user.image.url)
