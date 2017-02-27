# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
users = User.create!([
  {username: "Foodie", password: "cupcake", f_name: "Mario", l_name: "Penne", email: "mario@yumper.com", zip: "10009"}, {username: "a", password: "asdasa", f_name: "Fabio", l_name: "Feragamo", email: "a@gmail.com", zip: "10001"},
  {username: "b", password: "asdasb", f_name: "Penne", l_name: "Vichi", email: "b@gmail.com", zip: "10002"},
  {username: "c", password: "asdasc", f_name: "James", l_name: "Black", email: "c@gmail.com", zip: "10003"},
  {username: "d", password: "asdasd", f_name: "Jamie", l_name: "Oliver", email: "d@gmail.com", zip: "10004"}, {username: "e", password: "asdase", f_name: "Alton", l_name: "Brown", email: "e@gmail.com", zip: "10005"}])

User.destroy_all
users = User.create!([
  {username: "Foodie", password:"cupcake", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009"},
  {username: "a", password:"asdasd", f_name: "mario", l_name: "luigi", email: "a@gmail.com", zip: "10009"},
  {username: "b", password:"asdasd", f_name: "mario", l_name: "luigi", email: "b@gmail.com", zip: "10009"}])

images = [
  "https://s3.amazonaws.com/yumpapp-pro/9a1b74fdcadf63cb37dc529cc48c3a85.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/Thai-Food.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/Thai-street-food-1-of-11.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/fancy-chocolate-desserts-wallpaper-4.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/oysters.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/pasta_time_freeze.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/salad.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/soup.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/steak.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/sushi-wallpaper-2.jpg"
]


businesses = [];
randomBizLat = (40.7038..40.8234)
randomBizLng = (-74.0180..-73.9383)
randomBizZip = %w{10026 10027 10030 10037 10039
  10001 10011 10018 10019 10020
  10036 10029 10035 10010 10016
  10017 10022 10012 10013 10014
  10004 10005 10006 10007 10038
  10280 10002 10003 10009 10021
  10028 10044 10065 10075 10128
10023 10024 10025}
randomBizPrice = %w{$ $$ $$$ $$$$}
randomBizAreaCode = %w(212 718 917 347 929)

Business.destroy_all
Faker::Config.locale = 'en-US'
10.times do |n|
  businesses << Business.create!({
    name: Faker::Company.name,
    street: Faker::Address.street_address,
    city: "New York City",
    state: "NY",
    zip: (randomBizZip).sample,
    phone: "#{randomBizAreaCode.sample}-#{Faker::PhoneNumber.exchange_code}-#{Faker::PhoneNumber.subscriber_number}",
    image: images[n],
    price: randomBizPrice.sample,
    latitude: rand(randomBizLat),
    longitude: rand(randomBizLng)
  })
end

reviews = [];

Review.destroy_all
10.times do |b|
  rand(1..3).times do |n|
  nextNum = n+1
    reviews << Review.create!({
      user_id: users[nextNum].id,
      business_id: businesses[b].id,
      review: Faker::ChuckNorris.fact,
      rating: rand(1..5)
    })
  end
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
businesses.length.times do |b|
  3.times do |n|
    taggings << Tagging.create!({business_id: b, tag_id: tags[n].id})
  end
end
