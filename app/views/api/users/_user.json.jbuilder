# json.extract! user do :id, :username, :f_name, :l_name, :zip

  json.id user.id
  json.f_name user.f_name
  json.l_name user.l_name[0]
  json.zip user.zip

# json.image_url asset_path(user.image.url)
