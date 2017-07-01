json.extract! review, :id, :user_id, :business_id, :review, :rating

json.image_url asset_path(review.image.url(:large))
json.created_at review.created_at.strftime("%m/%d/%Y")
# json.image_url asset_path(user.image.url)

json.reviewer do
  # json.extract! review.reviewer, :id, :f_name, :l_name, :zip
  json.id review.reviewer.id
  json.f_name review.reviewer.f_name
  json.l_name review.reviewer.l_name[0]
  json.zip review.reviewer.zip
end
