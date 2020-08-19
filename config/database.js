const Sequelize = require('sequelize');

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'netpliks',
    username: 'root',
    password: 'password'
});

module.exports = db