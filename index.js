const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');

const userRouter = require('./route/users');
const movieRouter = require('./route/movies');
const subscriptionRouter = require('./route/subscriptions');
const historyRouter = require('./route/history_watch');
const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

connection.connect(err => {
    if(err) {
        console.log("error");
    }else {
        console.log("connected");
    }
});

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