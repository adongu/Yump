# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
users = User.create!([{username: "Foodie", password:"cupcake", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009"}, {username: "a", password:"asdasd", f_name: "mario", l_name: "luigi", email: "a@gmail.com", zip: "10009"}, {username: "b", password:"asdasd", f_name: "mario", l_name: "luigi", email: "b@gmail.com", zip: "10009"}])

# user1 = User.create!(username: "Foodie", password:"cupcake", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009")
# user2 = User.create!(username: "a", password:"asdasd", f_name: "mario", l_name: "luigi", email: "a@gmail.com", zip: "10009")
# user3 = User.create!(username: "b", password:"asdasd", f_name: "mario", l_name: "luigi", email: "b@gmail.com", zip: "10009")

images[
  "https://s3.amazonaws.com/yumpapp-pro/9a1b74fdcadf63cb37dc529cc48c3a85.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/Thai-Food.jpg",
  "	https://s3.amazonaws.com/yumpapp-pro/Thai-street-food-1-of-11.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/fancy-chocolate-desserts-wallpaper-4.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/oysters.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/pasta_time_freeze.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/salad.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/soup.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/steak.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/steak.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/sushi-wallpaper-2.jpg
"
]
businesses = [];

Business.destroy_all
Faker::Config.locale = 'en-US'
10.times do |n|
  businesses << Business.create!({
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip_code,
    phone: Faker::PhoneNumber.phone_number,
    image_url: images[n]
    price: "$$",
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude
  })
end

reviews = [];

Review.destroy_all
3.times do
  reviews << Review.create!({
    user_id: users[0].id,
    business_id: businesses[2].id,
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 3
  })
end

tags = [];
Tag.destroy_all
alltags = ["Tacos", "Mediterrean",  "Spanish", "French", "American", "Chinese"]
alltags.each do |tag|
  tags << Tag.create!({tag:"#{tag}"})
end

Tagging.destroy_all
taggings = [];
randomBizNum = rand(businesses[0].id..businesses[9].id)
randomUserNum = rand(tags[0].id..tags[-1].id)
5.times do |n|
  taggings << Tagging.create!({business_id: businesses[n].id, tag_id: tags[n].id})
end
