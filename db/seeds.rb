# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!(username: "Foodie", password:"cupcake", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009")
user2 = User.create!(username: "a", password:"asdasd", f_name: "mario", l_name: "luigi", email: "a@gmail.com", zip: "10009")

businesses = [];

Business.destroy_all
Faker::Config.locale = 'en-US'
10.times do
  businesses << Business.create!({
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip: Faker::Address.zip_code,
    phone: Faker::PhoneNumber.phone_number,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude
  })
end

reviews = [];

Review.destroy_all
3.times do
  reviews << Review.create!(user_id: user1.id, business_id: businesses[2].id, review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", rating: 3)
end
