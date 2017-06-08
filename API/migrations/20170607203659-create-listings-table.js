'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('listings', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'created_at': {
        type: Sequelize.DATE
      },
      'updated_at': {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING
      },
      'category_id': {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
        length: 1000,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      'coord_x': {
        type: Sequelize.DOUBLE,
      },
      'coord_y': {
        type: Sequelize.DOUBLE,
      },
      'building_condition': {
        type: Sequelize.STRING,
        length: 1000,
      },
      'building_facilities': {
        type: Sequelize.STRING,
        length: 1000,
      },
      'building_risk': {
        type: Sequelize.STRING,
        length: 1000,
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('listings');
  }
};
