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

#### Back End
[Yump][yump] was built on Ruby on Rails in the back end with postgreSQL database. JSON API was used to perform all AJAX requests. Associations were used for many-to-many relationships between different models for querying. RESTful routes were used for performing CRUD.

#### Front End
Front end portion of the app is built on Facebook's views library [React.js][react] with ES6 and utilizes Redux[redux] architecture for single stream of states. React allows quick re-rendering of views through its use of virtual DOM, allowing React to wait until end of event loop to apply actual changes. React takes care of real DOM manipulation by making the bare minimal changes needed.

#### Libraries
- [React.js][react]
- [Redux][redux]
- [pg_search][pg_search]
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [Paperclip](https://github.com/thoughtbot/paperclip) to store user profile images using Amazon Web Services
- [figaro](https://github.com/laserlemon/figaro) to securely store keys and other important data.

#### Search
Yump utilizes [pg_search][pg_search] multisearch with trigram and tsearch to search for businesses with whole text, partial text, with typos within 3 letters. Attributes such as business name, address, rating, price range.


#### Map
[Google Map][map] is used for displaying locations of businesses. Users have the ability search for restaurants and click on markers to redirect to business page.

[yump]: http://www.alexliang.co/
[pg_search]:https://github.com/Casecommons/pg_search
[react]:https://facebook.github.io/react/
[redux]:https://github.com/reactjs/redux
[map]:https://developers.google.com/maps/
