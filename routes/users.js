const router = require('express').Router();
const passport = require('passport');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error ' + err));
});
router.route('/login').post(
    passport.authenticate('basic', function (req, res) {
        req.login(user, function(err) {
            if (err) { return next(err); }
            return res.json(req.user.username);
        });
    })
);

router.route('/logout').post((req, res) => {
    req.logout();
    res.redirect('/');
});

    router.route('/register').post((req, res) => {
        User.create(req.body)
        .then(user => {
        req.login(user, function(err) {
            if (err) { return next(err); }
            return res.json(req.user.username);
        }); 
        })
    })

module.exports = router;