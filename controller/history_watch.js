const connection = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
    listing : (req, res) => {
        connection.query("select * from view_history_watch", (err, result) => {
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
        connection.query(`select * from history_watch where id_history= ${id}`, (err, result) => {
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
        const {id_movie, id_user, id_subscription} = req.body;
        connection.query(`insert into history_watch values(null, ${id_movie}, ${id_user}, ${id_subscription})`, (err, result) => {
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

