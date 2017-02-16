# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: "Foodie", password:"cupcake", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009")
User.create!(username: "a", password:"asdasd", f_name: "mario", l_name: "luigi", email: "mario@yumper.com", zip: "10009")

Business.destroy_all
10.times do
  Business.create!(name: Faker::)
end
