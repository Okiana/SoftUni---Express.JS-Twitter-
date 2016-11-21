const mongoose = require('mongoose')

const getTags = tags => tags.join(',')
const setTags = tags => tags.split(',')

let tweetSchema = mongoose.Schema({
  message: { type: String, default: 'Default message', max: 20 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  tags: { type: [], get: getTags, set: setTags },
  likes: { type: Number },
  views: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

// tweetSchema.statics = {
//   list: function (options) {
//     const criteria = options.criteria || {}
//     const page = options.page || 0
//     const limit = options.limit || 100
//     return this.find(criteria)
//         .populate('user', 'username')
//         .sort({ createdAt: -1 })
//         .limit(limit)
//         .skip(limit * page)
//         .exec()
//   }

let Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet

