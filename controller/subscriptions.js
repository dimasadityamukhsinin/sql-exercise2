const connection = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
    listing : (req, res) => {
        connection.query("select * from view_subscriptions", (err, result) => {
            if(err) {
                res.send({
                    message: "error",
                    status: 500
                })
            }else {
                res.send({
                    message: "listing data",
                    status: 200,
                    result
                })
            }
        });
    },
    detail : (req,res) => {
        const {id} = req.params;
        connection.query(`select * from subscriptions where id_subscription= ${id}`, (err, result) => {
            if(err) {
                res.send({
                    message: "error",
                    status: 500
                })
            }else {
                res.send({
                    message: "detail data",
                    status: 200,
                    result
                })
            }
        });
    },
    add : (req, res) => {
        const {id_user, status} = req.body;
        connection.query(`insert into subscriptions values(null, ${id_user}, ${status} )`, (err, result) => {
            if(err) {
                res.send({
                    message: "error",
                    status: 500
                })
            }else {
                res.send({
                    message: "added",
                    status: 200,
                    result
                })
            }
        });
    }
}

