const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Users = require('./models/user.model.js')
const expressSession = require('express-session')({
  secret: 'secret',
    resave: false,
  saveUninitialized: false
});

const connectEnsureLogin = require('connect-ensure-login');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.use(express.static(__dirname));

/*  PASSPORT SETUP  */

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri || 'mongodb://localhost/Borrow',
  { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const loanRouter = require('./routes/loan');
const borrowRouter = require('./routes/borrow');

app.use('/api/users', usersRouter);
app.use('/api/loan', loanRouter);
app.use('/api/borrow', borrowRouter);


app.use(express.urlencoded({extended: true}));


app.use(expressSession);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});