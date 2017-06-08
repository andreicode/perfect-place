'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('bookmarks', {

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
      'user_id': {
        type: Sequelize.INTEGER,
      },
      'listing_id': {
        type: Sequelize.INTEGER,
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

    return queryInterface.dropTable('bookmarks');
  }
};
