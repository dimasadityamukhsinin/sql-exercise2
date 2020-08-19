const db = require('../config/database');
const Sequelize = require('sequelize');
const User = require('./User');

const Subscription = db.define('subscription', {
    id_subscription: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: Sequelize.BOOLEAN,
    }
});

User.hasOne(Subscription);
Subscription.belongsTo(User, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey : 'id_user'
});

module.exports = Subscription;