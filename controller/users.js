const bcrypt = require("bcrypt");
const User = require('../models/User');

module.exports = {
    listing : (req, res) => {
        User.findAll({
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
        User.findOne({
            where: {
                id_user: id
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
        const {fullname, username, email, password, address} = req.body;
        bcrypt.hash(password, 10, (error, hashedPassword) => {
            if(error) {
                res.send({
                    message: `${error}`
                })
            }else {
                User.create({
                    fullname : fullname,
                    username : username,
                    email : email,
                    password : hashedPassword,
                    address: address
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
        })
    },
    update : (req, res) => {
        const {id} = req.params;
        const {fullname, username, email, password, address} = req.body;
        User.update({
            fullname : fullname,
            username : username,
            email : email,
            address: address
        }, {
            where: {
              id_user: id
            }
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
    deleteUser : (req, res) => {
        const {id} = req.params;
        User.destroy({
            where: {
              id_user: id
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