# Yump

[Yump Live][heroku]

[heroku]: www.heroku.com

Yump is an web application excited by Yelp and built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

##Features & Implementation

### Businesses

Business are stored in the 'businesses' table. Columns include `id`, `name`, `street_address`, `latitude`, `longitude`, and `image_url`. This table will be joined with `tags` table with `tagging`. Seeds will be seeded using Faker. All businesses can have multiple tags(tacos, happyhour, breakfast, etc.), reviews, and pictures.

Businesses will be stored in the state as an object with `id` pointing to each business in the DB. Businesses will render 2 components:
1. `BusinessIndex`: this component will be displayed when searching or filtering for tags
2. `BusinessDetail`: this component will be displayed next to business displaying tags, number of reviews, and ratings

### Searching with Tags and filters
Business tags are stored in a `tags` table and are joined to the `businesses` table through the `taggings` table. `BusinessesController` will query necessary businesses through associations.

### Reviews
Reviews for businesses are stored in `reviews` table. reviews can be uploaded with `BusinessReview` form. Reviews are rendered inside `BusinessReviewIndex` component.


### Pictures
Picture for reviews are stored in the database in the `pictures` table. It contains columns for `id`. Pictures belong to user and businesses. Submission is handled by [Cloudinary](http://cloudinary.com/).
