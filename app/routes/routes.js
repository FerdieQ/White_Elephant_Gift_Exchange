var express = require('express');
var router  = express.Router();

// Require controllers.
// var welcomeController = require('../controllers/welcome');
// var usersController   = require('../controllers/users');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.render('welcome/index', { user: req.user });
  });

  // OAuth route
  app.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  // Google OAuth callback route
  app.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/#/',
      failureRedirect : '/'
    }
  ));

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


};

