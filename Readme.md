# Yump

[Yump Live][yump]


## Summary
[Yump][yump] is an web application excited by Yelp and built using Ruby on Rails and React.js/Redux architecture. Yump users have the ability to:

* Create an account
* Log in / Log out
* Browse through restaurants list of suggested restaurants (with restaurant pictures, address, phone number, tags, average ratings, number of reviews, and price range)
* View business page to see all business info, photos, reviews
* Add, edit, and delete review and rating for restaurants.
* Search and filters out restaurants base on restaurant information and location(name, ratings, price, address, tags)
* Search instantly searches from each keystroke to bring user live search results
* View location of restaurants on Google map with markers when searching for restaurants

##Overall APP Structure

#### Back end
the app was built on Ruby on Rails in the back end with postgreSQL database. JSON API was used to perform all AJAX requests. RESTful routes were used for performing CRUD.

#### Search
Yump utilizes [pg_search][pg_search] multisearch with trigram and tsearch to search for businesses with whole text, partial text, and typos within 3 letters. Attributes such as business name, address, rating, price range 

[yump]: http://www.alexliang.co/
[pg_search]:https://github.com/Casecommons/pg_search
