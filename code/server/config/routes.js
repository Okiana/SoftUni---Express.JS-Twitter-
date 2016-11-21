const controllers = require('../controllers')
const auth = require('../config/auth')

module.exports = (app) => {
  app.get('/', controllers.tweets.index)

  app.get('/users/register', controllers.users.register)
  app.post('/users/create', controllers.users.create)
  app.get('/users/login', controllers.users.login)
  app.post('/users/authenticate', controllers.users.authenticate)
  app.post('/users/logout', controllers.users.logout)
  app.get('/users/profile/:username', auth.isAuthenticated, controllers.users.profile)

  app.get('/tweet', auth.isAuthenticated, controllers.tweets.formCreate)
  app.post('/tweet/create', controllers.tweets.create)
  app.get('/tag/:tagname', controllers.tweets.tags)
}




