const db = require('../config/database');
const Sequelize = require('sequelize');

const User = db.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: Sequelize.STRING(25),
    },
    username: {
        type: Sequelize.STRING(25),
    },
    email: {
        type: Sequelize.STRING(30),
        validate : {
            isEmail: true,
        }
    },
    password: {
        type: Sequelize.TEXT,
    },
    address : {
        type: Sequelize.TEXT
    }
});

module.exports = User;