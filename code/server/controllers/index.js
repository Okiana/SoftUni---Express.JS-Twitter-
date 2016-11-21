let homeController = require('./home-controller')
let usersController = require('./users-controller')
let tweetController = require('./tweet-controller')


module.exports = {
  home: homeController,
  users: usersController,
  tweets: tweetController
}
