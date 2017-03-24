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
# randomBizLat = (40.7038..40.8234)
# randomBizLng = (-74.0180..-73.9383)
# randomBizZip = %w{10026 10027 10030 10037 10039
#   10001 10011 10018 10019 10020
#   10036 10029 10035 10010 10016
#   10017 10022 10012 10013 10014
#   10004 10005 10006 10007 10038
#   10280 10002 10003 10009 10021
#   10028 10044 10065 10075 10128
# 10023 10024 10025}
# randomBizAreaCode = %w(212 718 917 347 929)
randomBizPrice = %w{$ $$ $$$ $$$$}

bizNameArr = ["Masa", "Le Bernardin", "Eleven Madison Park", "Momofuku Ko", "Jungsik", "L’Appart", "Jean-Georges", "Bouley", "Per Se", "Chef’s Table at Brooklyn Fare"]
streetArr = ["10 Columbus Cir, Fl 4", "155 W 51st St", "11 Madison Ave", "8 Extra Pl", "2 Harrison St", "225 Liberty St", "1 Central Park W", "163 Duane St", "10 Columbus Cir, Fl 4", "431 W 37th St"]
zipArr = ["10019", "10019", "10010", "10003", "10013", "10281", "10023", "10013", "10019", "10018"]
phoneArr = ["(212) 823-9800", "(212) 554-1515", "(212) 889-0905", "(212) 500-0831)", "(212) 219-0900", "(212) 981-8577", "(212) 299-3900", "(212) 964-2525", "(212) 823-9335", "(718) 243-0050"]
latitudeArr = ["40.768573", "40.7615691", "40.741726", "40.724783", "40.718827", "40.711984", "40.769069", "40.716969", "40.768227", "40.756193"]
longitudeArr = ["-73.983045", "-73.981805", "-73.987173", "-73.991441", "-74.009075", "-74.015265", "-73.981560", "-74.008958", "-73.982859", "-73.996609"]

Business.destroy_all
# Faker::Config.locale = 'en-US'
10.times do |n|
  debugger
  businesses << Business.create!({
    name: bizNameArr[n],
    street: streetArr[n],
    city: "New York",
    state: "NY",
    zip: zipArr[n],
    phone: phoneArr[n],
    # phone: "#{randomBizAreaCode.sample}-#{Faker::PhoneNumber.exchange_code}-#{Faker::PhoneNumber.subscriber_number}",
    image: images[n],
    price: randomBizPrice.sample,
    latitude: latitudeArr[n],
    longitude: longitudeArr[n]
  })
end

reviewsArr = [
  "It was much better than I expected. I was happy to see how clean everything was. The waitress was prompt and polite. After my meal, I was knocked into a food coma. The ambiance gives off an earthy feel-good vibe. Satisfactory experience, will come again.",
  "This place was nearby and I decided to check it out. There were a lot of interesting decorations on the walls. The service was good for the most part but the waiter was a bit slow. Some of my favorite dishes are no longer available. I found the entrees to be somewhat agreeable to my personal flavor-profile. Satisfactory experience, will come again.",
  "I felt like this place wasn't trying hard enough. The service wasn't that good and the waitress was tired. I asked for my steak medium, but it was burnt to a crisp. Everything tasted either microwaved or straight from a can. The ambiance gives off an earthy feel-good vibe. I had a less than satisfactory experience and will probably not be here again.",
  "This place is a waste of calories. Even Chef Boyardee would be disgusted by this sorry attempt at a meal. Overhyped. 1 star was too generous.",
  "I've got a fetish for good food and this place gets me hot! The waitress was prompt and polite. This was one of the best mouth-watering steaks I've had grace my taste buds in a long time. I found the ambiance to be very charming. They got a new customer for life!",
  "Decent place. This was one of the best mouth-watering steaks I've had grace my taste buds in a long time. I found the ambiance to be very charming. Try out the huge selection of incredible appetizers. The waiter was prompt and polite. 4 stars of quality.",
  "I had high hopes for this place. I was not very pleased to find out that the coffee wasn't fair trade. The service wasn't that good and the waitress was rude. The ambiance gives off an earthy feel-good vibe. I had a satisfactory experience and will have to try it again.",
  "This place is a waste of real estate. The menu didn't match the one on their website. The food was all right but seriously lacked presentation. The ambiance gives off an earthy feel-good vibe. I heard a rumor that the vegetarian dishes are prepared alongside the meat. Overall experience: 2 stars.",
  "Bleh. I asked for my steak medium-rare, but it was frozen in the center. I heard a rumor that the vegetarian dishes are prepared alongside the meat. This place is very dumpy and in a serious need of a fresh paint job. I had a less than satisfactory experience and will probably not be here again.",
  "I have been here several times before. The entree I had was sublime. The decor was unique and incredible. I had to take one star away because my coffee mug was dirty.",
  "Best experience ever! I was happy to see how clean everything was. The food was flavorful, savory, and succulent. I found the ambiance to be very charming. The waitress was prompt and polite. Easily earned their 5 stars!",
  "I am never coming back here! The service wasn't that good and the waitress was unprofessional. Some of my favorite dishes are no longer available. Meh."
  ];

Review.destroy_all
10.times do |b|
  rand(3..4).times do |n|
  nextNum = n+1
    reviews << Review.create!({
      user_id: users[nextNum].id,
      business_id: businesses[b].id,
      review: reviewsArr.sample,
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
