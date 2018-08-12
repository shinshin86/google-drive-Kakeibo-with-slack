'use strict';
const Sequelize = require('sequelize');

module.exports.schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false
  }
};

module.exports.option = {
  tableName: 'payments',
  freezeTableName: true,
  charset: 'utf8',
  collate: 'utf8_general_ci'
};
