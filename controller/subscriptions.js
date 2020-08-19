const connection = require("../config/database");
const Subscription = require('../models/Subscription');

module.exports = {
    listing : (req, res) => {
        Subscription.findAll({
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
        Subscription.findOne({
            where: {
                id_subscription: id
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
        const {id_user, status} = req.body;
        Subscription.create({
            id_user : id_user,
            status : status
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
    }
}

