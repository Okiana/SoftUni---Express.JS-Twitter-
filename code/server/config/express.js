const express = require('express')
let path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const flash = require('../../public/lib/index')
const helpers = require('view-helpers')
const pkg = require('../../package.json')

module.exports = (config, app) => {
  app.set('view engine', 'pug')
  app.set('views', config.rootPath + 'server/views')

  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({
    secret: 'neshto-taino!@#$%',
    resave: true,
    saveUninitialized: true
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(flash())
  app.use(helpers(pkg.name))
  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user
    }

    next()
  })
  app.use(express.static(path.join(__dirname, 'public')))
}
