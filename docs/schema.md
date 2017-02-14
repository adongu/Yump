
## users

| column name     | data type | details               |
|-----------------|-----------|-----------------------|
| id              | integer   | not null, primary key |
| username        | string    | not null, unique, indexed|
| password_digest | password  | not null              |
| session_token   | string    | not null, unique, indexed|
| f_name          | string    | not null              |
| l_name          | string    | not null              |
| picture          | url      | not null              |

## businesses

| column name | data type |  details                               |
|-------------|:---------:|---------------------------------------:|
| id          | integer   | not null, primary key                  |
| name        | string    | not null                               |
| user_id     | integer   | not null, indexed, foreign_key(references user)|
| street_name | string    | not null                               |
| city        | string    | not null                               |
| state       | string    | not null                               |
| zip         | integer   | not null                               |
| review_id   | integer   | not null, indexed, foreign_key(references review)|
| price       | string    | not null, inclusive [$, $$, $$$, $$$$] |
| longitude   | float     | not null                               |
| latitude    | float     | not null                               |
| picture     | url       | not null                               |

## reviews

| column name | data type |              details             |
|:-----------:|:---------:|:--------------------------------:|
| id          | integer   | not null, primary key            |
| user_id     | integer   | not null, unique, indexed        |
| business_id | integer   | not null, unique, indexed        |
| review      | text      | not null, unique                 |
| rating      | integer   | not null, inclusive [1, 2, 3, 4] |
| Picture     | array     | unique, indexed                  |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key(references business), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key(references tags), indexed
