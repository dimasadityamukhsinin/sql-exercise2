const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

const userRouter = require('./route/users');
const movieRouter = require('./route/movies');
const subscriptionRouter = require('./route/subscriptions');
const historyRouter = require('./route/history_watch');
const app = express();

//Models
const User = require('./models/User');
const Subscription = require('./models/Subscription');
const Movie = require('./models/Movie');
const History = require('./models/History_watch');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

db
.authenticate()
.then(() => {
    console.log("CONNECTED");
})
.then(() => {
    User.sync().then(() => console.log("Table created"));
    Movie.sync().then(() => console.log("Table created"));
    Subscription.sync().then(() => console.log("Table created"));
    History.sync().then(() => console.log("Table created"));
})
.catch(error => {
    console.log(error);
})

app.get('/', (req,res) => {
    res.send("Welcome");
});

app.use('/', userRouter);
app.use('/', movieRouter);
app.use('/', subscriptionRouter);
app.use('/', historyRouter);

app.listen(3000, () => {
    console.log("Server running");
})