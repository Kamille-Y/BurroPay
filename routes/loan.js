const router = require("express").Router();
let Loan = require("../models/loan.model");
const passportLocalMongoose = require('passport-local-mongoose');

router.route("/").get((req, res) => {
    Loan.find()
        .then(loan => res.json(loan))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const borrower = req.body.borrower;
    const amount = Number(req.body.amount);
    const interest = Number(req.body.interest)
    const months = Number(req.body.months);
    const date = new Date();

    const newLoan = new Loan({
        username,
        borrower,
        amount,
        interest,
        months,
        date,
    });

    newLoan.save()
    .then(() => res.json('New loan added'))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route('/:id').get((req, res) => {
    Loan.findById(req.params.id)
    .then(loan => res.json(loan))
    .catch(err => res.status(400).json('Err ' + err));
});

router.route("/:id").delete((req, res) => {
    Loan.findByIdAndDelete(req.params.id)
    .then(() => res.json('Loan deleted'))
    .catch((err) => res.status(400).json("Err " + err));
});

router.route("/update/:id").post((req, res) => {
    Loan.findById(req.params.id)
    .then(loan => {
        loan.username = req.body.username;
        loan.borrower = req.body.borrower;
        loan.amount = Number(req.body.amount);
        loan.interest = Number(req.body.interest);
        loan.months = Number(req.body.months);

        loan.save()
        .then(() => res.json('Loan updated'))
        .catch((err) => res.status(400).json("Err " + err));
    })
    .catch((err) => res.status(400).json("Err " + err));
});

module.exports = router;