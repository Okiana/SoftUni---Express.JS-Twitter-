let Tweet = require('mongoose').model('Tweet')
let User = require('mongoose').model('User')
let only = require('only')

module.exports = {
  index: (req, res) => {
    Tweet
    .find({}, (err) => {
      if (err) { return err }
    })
    .sort({createdAt: -1})
    .limit(100)
    .select('user createdAt tags message')
    .then(tweets => {
      tweets.forEach((element) => {
        User
        .findById(element.user)
        .select('username')
        .then(username => {
          let k = only(username, 'username')
          element['user'] = k['username']
        })
      })
      console.log(tweets)
      res.render('home/index', {tweets: tweets})
    })
  },
  formCreate: (req, res) => {
    res.render('tweets/create')
  },
  create: (req, res) => {
    let tweet = req.body
    let user = req.user
    tweet.user = user
    console.log(tweet.user.username)
    let separators = '/(?:,|.|\\?|\\!| )+/'
    let separateText = tweet.message.split(new RegExp(separators, 'g'))
    for (let i in separateText) {
      console.log(separateText[i])
    }
    Tweet
        .create(tweet, (err, tweet) => {
          if (err) {
            res.render('tweets/create', {globalError: 'Ooops 500'})
            return
          }
          // res.redirect('/')
        })
        .then(tweets => {
          res.redirect('/')
        })
  },
  tags: (req, res) => {
    let tagname = req.params.tagname
    Tweet
      .find({})
      .where('tags')
      .equals(tagname)
      .sort({createdAt: -1})
      .limit(100)
      .then(tweets => {
        tweets.searchedTag = tagname
        res.render('tweets/tagnames', {tweets: tweets})
      })
  }
}
