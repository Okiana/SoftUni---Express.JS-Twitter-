module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/users/login')
    }
  },
  isAdmin: (role) => {
    return (req, res, next) => {
      if (req.user && req.user.roles === 'admin') {
        next()
      } else {
        req.flash('info', 'You are not authorized')
        res.redirect('/users/login')
      }
    }
  }
}
