json.extract! review, :id, :user_id, :business_id, :review, :rating, :image_file_name, :image_content_type, :image_file_size, :image_updated_at
# json.image_url asset_path(user.image.url)

json.reviewer (User.user_id, :f_name, :l_name, :zip)
