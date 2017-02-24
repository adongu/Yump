json.extract! review, :id, :user_id, :business_id, :review, :rating
json.image_url asset_path(review.image.url)
# json.image_url asset_path(user.image.url)

json.reviewer do
  json.extract! review.reviewer, :id, :f_name, :l_name, :zip
end
