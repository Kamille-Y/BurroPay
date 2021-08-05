var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const User = require("../models/user.model")


module.exports = function(passport) {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            console.log(username)
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                console.log(user.password)
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));
}