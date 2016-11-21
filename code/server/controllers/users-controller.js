let User = require('mongoose').model('User')
let encryption = require('../utilities/encryption')

module.exports = {
  register: (req, res) => {
    res.render('users/register')
  },
  create: (req, res) => {
    let user = req.body

    if (user.password !== user.confirmPassword) {
      res.render('users/register', {globalError: 'Password don\'t match'})
    } else {
      user.salt = encryption.generateSalt()
      user.hashedPass = encryption.generateHashedPassword(user.salt, user.password)

      User
        .create(user)
        .then(user => {
          req.logIn(user, (err, user) => {
            if (err) {
              res.render('users/register', {globalError: 'Ooops 500'})
              return
            }
            res.redirect('/')
          })
        })
    }
  },
  login: (req, res) => {
    res.render('users/login')
  },
  authenticate: (req, res) => {
    let inputUser = req.body

    User
      .findOne({ username: inputUser.username })
      .then(user => {
        if (!user.authenticate(inputUser.password, inputUser.username)) {
          res.render('users/login', { globalError: 'Invalid username or password' })
        } else {
          req.logIn(user, (err, user) => {
            if (err) {
              res.render('users/login', {globalError: 'Ooops 500'})
              return
            }
            res.redirect('/')
          })
        }
      })
  },
  profile: (req, res) => {
    let username = req.params.username
    User
      .findOne({ username: username })
      .then(user => {
        res.render('users/profile', {user: user})
      })
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  }
}

