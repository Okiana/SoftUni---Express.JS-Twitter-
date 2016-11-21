const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  salt: String,
  hashedPass: String,
  roles: { type: String, default: 'user' }
})

/**
 * Validations
 */

userSchema.path('firstName').validate((firstName) => {
  return firstName.length
}, 'FirstName cannot be blank')

userSchema.path('lastName').validate((lastName) => {
  return lastName.length
}, 'LastName cannot be blank')

userSchema.path('username').validate((username) => {
  return username.length
}, 'Username cannot be blank')

userSchema.path('username').validate((username, fn) => {
  const User = mongoose.model('User')

  // Check only when it is a new user or when username field is modified
  if (this.isNew) {
    User.find({ username: username }).exec((err, users) => {
      fn(!err && users.length === 0)
    })
  } else fn(true)
}, 'Username already exists')

userSchema.method({
  authenticate: function (password, username) {
    let inputHashedPassword = encryption.generateHashedPassword(this.salt, password)
    if (username !== null) {
      if (inputHashedPassword === this.hashedPass) {
        return true
      }
    } else {
      return false
    }
  }
})


let User = mongoose.model('User', userSchema)

module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length === 0) {
      let salt = encryption.generateSalt()
      let hashedPass = encryption.generateHashedPassword(salt, 'Admin12')

      User.create({
        username: 'Admin',
        firstName: 'Admin',
        lastName: 'Adminov',
        salt: salt,
        hashedPass: hashedPass,
        roles: 'admin'
      })
    }
  })
}
