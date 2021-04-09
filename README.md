# Hack Kosice Marathon: 
Sudolabs Eaters

# Team
SUDO is bLoAt

# Team members
 - Matúš Bárány, SPŠE KE komenského 44
 - Lukáš randuška, SPŠE KE komenského 44

## Description
Our app tries to simplify the process of choosing the restaurant, eating time and choosing the orderer.

## Gaps:
  - people can potentially manipulate the time voting by submitting extreme values
  - people can write same restaurant in slightly different name and it can cause confusion 
 
## Solves:
  Orderers:
   - people in group can't vote who will order that day
   - to be selected, person need to tell the app that he will be in work, so there won't be any confusion in workplace
   - they are choosen by number of orders each person made so everybody is selected equally if people have same order count server will choose randomly.
  
  Time:
   - every person selects time range when they want to eat in our app and the server will compute most overlaps of these time ranges
   - if same overlaps on multiple times server will choose the closer one to 12:00 
 
  Place:
   - people write their own restaurants and most votes for restaurants wins

# Target users:
   - all hungry people that work in small companies


## Protoype
Our prototype has:
 - google authentication to identify the users
 - firebase database to store the votes with the additional data
 -  Heroku server that processes data -> see https://github.com/mtu4554/HerokuServer
 - person can vote for time and restaurant
 - all people can see summary of results from our server

Would like to implement:
 - "eating rooms" som people can be in multiple groups
 - google maps for more convenient searching for restaurants
 - list of people who will eat so the orderer can see for how many people is he ordering
 - notifications to notify everybody of voting results

## How to try


## Challenges and accomplishments
Is there anything unexpected that you learned over the course of this project?

## Is there something your team is particularly proud of, related to this project?
We are proud that we did so much work in so little time.


## License
sudolabs eaters is released under the MIT license.
