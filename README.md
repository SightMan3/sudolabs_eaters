#Hack Kosice Marathon: 
Sudolabs Eaters

#Team
SUDO is bLoAt

#Team members
Matúš Bárány, SPŠE KE komenského 44
Lukáš randuška, SPŠE KE komenského 44

##Description
Our app tries to simplify the process of choosing the restaurant, eating time and orderer.

##gaps:
  - people can potentially manipulate the time voting by submitting extreme values
  - people can write same restaurant in slightly different name and it can cause confusion 
  - 
##solves:
  orderers:
    - people in group can't vote who will order that day
    - to be selected, person need to tell the app that he will be in work, so there won't be any confusion in workplace
    - they are choosen by number of orders each person made so everybody is selected equally if people have same order count server will choose randomly.
##time:
    - every person selects time range when they want to eat in our app and the server will compute most overlaps of these time ranges
    - if same overlaps on multiple times server will choose the closer one to 12:00 
##place:
    - people write their own restaurants and most votes for restaurants wins

##targe users:
  - all hungry people that people that work in small companies


##Protoype
Our prototype has:
 - google authentication to identify the users
 - firebase database to store the votes with the additional data
 - server that processes data
 - person can vote for time and restaurant
 - all people can see summary of results from our server

Would like to implement:
 - "eating rooms" som people can be in multiple groups
 - google maps for more convenient searching for restaurants

##How to try
List any URLs relevant to demonstrating your prototype, e.g. a live url where judges can preview your app. Note that judges won't be able to setup anything in their computers.

##Challenges and accomplishments
Is there anything unexpected that you learned over the course of this project?

##Is there something your team is particularly proud of, related to this project?
We are proud that we did so much work in so little time.


##License
This repository includes an unlicense statement though you may want to choose a different license.
