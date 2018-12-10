'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID_a: {
        type: Sequelize.INTEGER
      },
      userID_b: {
        type: Sequelize.INTEGER
      },
      itemID_a: {
        type: Sequelize.INTEGER
      },
      itemID_b: {
        type: Sequelize.INTEGER
      },
      tradeTime: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trades');
  }
};