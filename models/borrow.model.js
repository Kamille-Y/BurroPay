const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const borrowSchema = new Schema(
    {
        username: { type: String, required: true },
        loaner: { type: String, required: true },
        amount: { type: Number, required: true },
        interest: { type: Number, required: true },
        months: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    {
        timestamps: true,
    }
);

const Borrow = mongoose.model("Borrow", borrowSchema);

module.exports = Borrow;
