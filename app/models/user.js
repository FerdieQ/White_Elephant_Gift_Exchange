var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');


// Gift Schema
var giftSchema = new mongoose.Schema({
  name: String,
  category: String,
  photoURL: String,
  meetingLocation: String,
  description: String
});

// User Schema
var userSchema = new mongoose.Schema({
  prof_name:  String,
  prof_email: String,
  prof_picture: String,
  googleID: String,
  gifts: [giftSchema],
  created: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
