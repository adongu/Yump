# Yump

[Heroku link](http://yump.herokuapp.com)

[Trello link](https://trello.com/b/VHYOHvPK/yump)

## Design Docs
* [View Wireframes][wireframes]
* [DB schema][schema]
* [React Components][components]
* [Sample State][sample-state]
* [API endpoints][api-endpoints]

[wireframes]: ./wireframes
[schema]: ./schema.md
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md

## Minimum Viable Product Check List
Yump is an web application excited by Yelp and built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [x] 1. New account creation, login, guest/demo login
- [x] 2. A production README [sample](./sample_production_readme.md)
- [x] 3. Hosting on Heroku
- [x] 4. Business Page
  *  Has business information
  * Can leave reviews
  * Have pictures
- [x] 5. Search / filters
  * Filter by price/orientation/location/rating/popularity
  * Search has name and location input
  * Has suggestions dropdown
- [x] 6. Reviews / ratings
  * Has form to leave review and leave start ratings(between 1-5)
  * Can add/delete pictures
  * Can add/update/delete reviews
- [x] 7. Map
  * Shows 10 businesses in the zip code filtered
  * User can drag map around
  * map updates page with 10 new business within near location(persisting search filters)

## Implementation timeline:

### Phase 1: Front End Auth/Back End Auth (2 Days W8D4 6:00PM)
**Objective:** Create functioning rails project with front-end Authentication Page(currentUser persisting)
### Phase 2: Model, API, and components (1 days W8D5 6:00PM)
**Objective:** Complete Business, review, and photo models(with taggings), controllers, and views(Jbuilder)
### Phase 3: Default Home Page(1 day W8D6 6:00PM)
**Objective:** Set up homepage with header, search, and suggested businesses
### Phase 4: Business Page(2 day W9D1 6:00PM)
**Objective:** Business page will have a review submission form and list of reviews. Users can submit reviews with ratings and pictures.
### Phase 5: Search Results/Filters (1 day W9D2 6:00PM)
**Objective:** Search businesses with tagging and tags, businesses should be able to re-filter(especially with maps) without redirecting)
### Phase 6: Map (1 day W9D3 6:00PM)
**Objective:** Map feature showing all business within 5 mile of center of map, allow redo search with dragging of map center
### Phase 7: Buffer (1.5 days W9D5 12:00PM)
**Objective:** Allow Extra room for ironing out kinks and potentially add on bonus features

Bonus Features:
- [ ] omniauth fb/twitter
- [ ] Profile Page
- [ ] Mark reviews funny, cool, useful
- [ ] Friends
- [ ] Followers
