# Componenet Hierachy

## AuthFormContainer
* AuthForm

## SearchBarContainer
* Logo
* SearchForm

## HomeContainer
* Header
* Search
* SuggestBusinesses
  * SuggestBusinessItem

## BusinessInfoContainer
* Reviews
* Pictures
* Tags

## BusinessHeaderContainer
* BusinessIndex
* BusinessIndexItems

## BusinessReviewsContainer
* BusinessReviewForm
* BusinessReviewIndex

## UserReviewItemContainer
* UserReviewInfo
* Review


## FilterContainer
* FilterItems

## Sidebar
* Map

## BusinessSearchContainer
* Filter
* Header
* Search
* BusinessInfo

# Routes

|          path          |         components         |
|:----------------------:|:--------------------------:|
| "/sign-up"             | "AuthFormContainer"        |
| "/sign-in"             | "AuthFormContainer"        |
| "home"                 | "HomeContainer"            |
| "/search-results"      | "BusinessSearchContainer"  |
| "/search-results/:tags | "BusinessSearchContainer"  |
| "/business/:id/"       | "BusinessReviewsContainer" |
