const connection = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
    listing : (req, res) => {
        connection.query("select * from users", (err, result) => {
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
        connection.query(`select * from users where id_user= ${id}`, (err, result) => {
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
        const {fullname, username, email, password, address} = req.body;
        bcrypt.hash(password, 10, (error, hashedPassword) => {
            if(error) {
                res.send({
                    message: `${error}`
                })
            }else {
                connection.query(`insert into users values(null, "${fullname}", "${username}", "${email}", "${hashedPassword}", "${address}" )`, (err, result) => {
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
        })
    }
}