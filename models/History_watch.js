const db = require('../config/database');
const Sequelize = require('sequelize');
const User = require('./User');
const Movie = require('./Movie');
const Subscription = require('./Subscription');

const History_watch = db.define('history_watch', {
    id_history: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
});

Movie.hasOne(History_watch);
History_watch.belongsTo(Movie, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  foreignKey : 'id_movie'
});

User.hasOne(History_watch);
History_watch.belongsTo(User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey : 'id_user'
});

Subscription.hasOne(History_watch);
History_watch.belongsTo(Subscription, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey : 'id_subscription'
});

module.exports = History_watch;