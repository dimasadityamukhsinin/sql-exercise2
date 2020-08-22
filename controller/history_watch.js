const connection = require("../config/database");
const History = require('../models/History_watch');

module.exports = {
    listing : (req, res) => {
        History.findAll({
            raw: true
        })
        .then(result => {
            res.status(200).send({
                message: "Get all data",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: error,
                status: 500,
            })
        })
    },
    detail : (req,res) => {
        const {id} = req.params;
        History.findOne({
            where: {
                id_history: id
            }
        })
        .then(result => {
            res.status(200).send({
                message: "Get data user",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    },
    add : (req, res) => {
        const {id_movie, id_user, id_subscription} = req.body;
        History.create({
            id_movie : id_movie,
            id_user : id_user,
            id_subscription : id_subscription
        })
        .then(result => {
            res.status(201).send({
                message: "Success",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    },
    deleteHistory : (req, res) => {
        const {id} = req.params;
        History.destroy({
            where: {
                id_history: id
            }
        })
        .then(result => {
            res.status(200).send({
                message: "Success",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    }
}

