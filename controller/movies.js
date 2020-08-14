const connection = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
    listing : (req, res) => {
        connection.query("select * from movies", (err, result) => {
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
        connection.query(`select * from movies where id_movie= ${id}`, (err, result) => {
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
        const {title, year, genre, description, url_trailer} = req.body;
        connection.query(`insert into movies values(null, "${title}", ${year}, "${genre}", "${description}", "${url_trailer}" )`, (err, result) => {
            if(err) {
                res.send({
                    message: err,
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

