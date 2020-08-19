const db = require('../config/database');
const Sequelize = require('sequelize');

const Movie = db.define('movie', {
    id_movie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(30),
    },
    year: {
        type: Sequelize.INTEGER,
    },
    genre: {
        type: Sequelize.STRING(15),
    },
    description: {
        type: Sequelize.TEXT,
    },
    url_trailer : {
        type: Sequelize.STRING(50)
    }
});

module.exports = Movie;