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

images = [
  "https://s3.amazonaws.com/yumpapp-pro/9a1b74fdcadf63cb37dc529cc48c3a85.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/Thai-Food.jpg",
  "https://s3.amazonaws.com/yumpapp-pro/hotpot.jpg",
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

bizNameArr = ["Masa", "Le Bernardin", "Eleven Madison Park", "Momofuku Ko", "Jungsik", "L’Appart", "Jean-Georges", "Bouley", "Per Se"]
streetArr = ["10 Columbus Cir, Fl 4", "155 W 51st St", "11 Madison Ave", "8 Extra Pl", "2 Harrison St", "225 Liberty St", "1 Central Park W", "163 Duane St", "10 Columbus Cir, Fl 4"]
cityArr = ["New York"]
zipArr = ["10019", "10019", "10010", "10003", "10013", "10281", "10023", "10013", "10019"]
phoneArr = ["(212) 823-9800", "(212) 554-1515", "(212) 889-0905", "(212) 500-0831)", "(212) 219-0900", "(212) 981-8577", "(212) 299-3900", "(212) 964-2525", "(212) 823-9335"]
latitude = ["40.768573", "40.7615691", "40.741726", "40.724783", "40.718827", "40.711984", "40.769069", "40.716969", "40.768227"]
longitude = ["-73.983045", "-73.981805", "-73.987173", "-73.991441", "-74.009075", "-74.015265", "-73.981560", "-74.008958", "-73.982859"]

Business.destroy_all
Faker::Config.locale = 'en-US'
10.times do |n|
  businesses << Business.create!({
    name: name,
    street: Faker::Address.street_address,
    city: "New York",
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
  rand(3..4).times do |n|
  nextNum = n+1
    reviews << Review.create!({
      user_id: users[nextNum].id,
      business_id: businesses[b].id,
      review: Faker::ChuckNorris.fact,
      rating: rand(1..5),
      image: images[rand(1..5)]
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
