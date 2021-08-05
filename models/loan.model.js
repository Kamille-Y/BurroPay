const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loanSchema = new Schema({
    username: { type: String, required: true },
    borrower: { type: String, required: true },
    amount: { type: Number, required: true },
    interest: { type: Number, required: true },
    months: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;