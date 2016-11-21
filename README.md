# SoftUni-Express.JS-Twitter
SoftUni Express.js course exam 
#Express.js Exam – Let’s build Twitter

##Exam rules:
*	You have 8 hours – from 10:00 to 18:00
*	When you are ready, delete the node_modules folder, make sure all dependencies are listed in the package.json file and submit your archived project at https://softuni.bg/trainings/1463/express-js-development-october-2016 
*	There will be no breaks during the exam but you can go to the toilet or to breathe some fresh air outside if you are alone
*	If you have any questions for the following description – ask the trainer, he is @ the back of the room
*	Have fun! 

## Problem 1.	Route / 
### Create a Node.js web server which is capable of returning an “index.html” file containing a welcome message and menu. Add all available routes from below to the menu. Add register, login and logout (only when logged in). List 100 tweets ordered by their creation date. The newest ones should be on top. Visible to anonymous users.

## Problem 2.	Route /tweet 
### This route should allow all authorized users to add a tweet to the feed. Each tweet has a message containing maximum 140 symbols.

## Problem 3.	Parse tags 
### Parse the message. All words starting with # should be considered tags. For example the message “Hello, Twitter! This is my #first #message in your system!” contains two tags – first and message. Each tag is unique and case-insensitive. Use space, ‘.’, ’,’, ‘!’ and ‘?’ as separators. 

## Problem 4.	Route /tag/{tagName} 
### This route should show all tweet messages containing the tag with tagName name. List only the latest 100 tweets.

## Problem 5.	Route /profile/{username} 
### This route should show information about the user with the provided username. Show his/her latest 100 tweets. Visible to authorized users only.

## Problem 6.	Add administration 
### If the user is an administrator, he/she should be able to edit or delete tweets. Add such functionally to the / and profile route. Additionally, add administration routes /admins/all and admins/add where administrators can add other users as administrators too.

## Problem 7.	Add handles 
### Besides tags, Twitter allows user handles. They start with @ and allow one user to mention another by his/her username. Every time a tweet message contains a handle, the message must appear in the profile of the specified user. For example a tweet by user BaiIvan with message “Sup, @Pesho and @Gosho! Have you seen the latest #BlizzCon?” should be shown in three profiles – BaiIvan, Pesho and Gosho. Additionally, the message should appear in the BlizzCon tag.

## Problem 8.	Add likes and views 
### Add views counter on every tweet. It should be incremented every time a message is listed. Show the total number of views for each tweet. Add option for authorized users to like a tweet and show the total number of likes. If the users liked a tweet, they should have the choice to dislike it. 

##OTHER REQUIREMENTS
*	Use Node.js as a web server
*	Use MongoDB as a database storage
*	Use Express.js as a routing framework
*	Follow the standard - https://github.com/feross/standard
*	You may use whatever frameworks you like






 
