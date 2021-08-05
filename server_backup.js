const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require('body-parser');
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

const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/Borrow',
  { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const loanRouter = require('./routes/loan');
const borrowRouter = require('./routes/borrow');

app.use('/users', usersRouter);
app.use('/loan', loanRouter);
app.use('/borrow', borrowRouter);


app.use(express.urlencoded({extended: true}));
//app.use(express.json()) // To parse the incoming requests with JSON payloads


app.use(expressSession);


/*  PASSPORT SETUP  */

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String});

 

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');
 
passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());



UserDetails.register({username:'paul', active: false}, 'paul');
UserDetails.register({username:'jay', active: false}, 'jay');
UserDetails.register({username:'roy', active: false}, 'roy');

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});