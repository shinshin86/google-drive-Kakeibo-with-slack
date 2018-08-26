'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const schema = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      item: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    };

    const option = {
      tableName: 'payments',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    };

    return queryInterface.createTable('payments', schema, option);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payments');
  }
};
