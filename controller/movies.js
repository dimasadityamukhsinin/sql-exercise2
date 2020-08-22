const connection = require("../config/database");
const Movies = require('../models/Movie');

module.exports = {
    listing : (req, res) => {
        Movies.findAll({
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
        Movies.findOne({
            where: {
                id_movie: id
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
        const {title, year, genre, description, url_trailer} = req.body;
        Movies.create({
            title : title,
            year : year,
            genre : genre,
            description : description,
            url_trailer : url_trailer
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
    update : (req, res) => {
        const {id} = req.params;
        const {title, year, genre, description, url_trailer} = req.body;
        Movies.update({
            title : title,
            year : year,
            genre : genre,
            description: description,
            url_trailer : url_trailer
        }, {
            where: {
                id_movie: id
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
    deleteMovie : (req, res) => {
        const {id} = req.params;
        Movies.destroy({
            where: {
                id_movie: id
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

