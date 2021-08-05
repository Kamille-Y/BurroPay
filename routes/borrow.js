const router = require("express").Router();
let Borrow = require("../models/borrow.model");
const passportLocalMongoose = require('passport-local-mongoose');

router.route("/").get((req, res) => {
    Borrow.find()
        .then((borrow) => res.json(borrow))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const loaner = req.body.loaner;
    const amount = Number(req.body.amount);
    const interest = Number(req.body.interest);
    const months = Number(req.body.months);
    const date = new Date();

    const newBorrow = new Borrow({
        username,
        loaner,
        amount,
        interest,
        months,
        date,
    });

    newBorrow.save()
    .then(() => res.json("New borrow added"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route(':/id').get((req,res) => {
    Borrow.findById(req.params.id)
    .then(borrow => res.json(borrow))
    .catch(err => res.status(400).json('Err ' + err));
});

router.route('/:id').delete((req, res) => {
    Borrow.findByIdAndDelete(req.params.id)
    .then(() => res.json('Borrow deleted'))
    .catch(err => res.status(400).json('Err ' + err));
});

router.route('/update/:id').post((req, res) => {
    Borrow.findById(req.params.id)
    .then(borrow => {
        borrow.username = req.body.username;
        borrow.loaner = req.body.loaner;
        borrow.amount = Number(req.body.amount);
        borrow.interest = Number(req.body.interest);
        borrow.months = Number(req.body.months);

        borrow.save()
        .then(() => res.json('Borrow updated'))
        .catch((err) => res.status(400).json('Err ' + err));
    })
    .catch((err) => res.status(400).json('Err ' + err));
})

module.exports = router;