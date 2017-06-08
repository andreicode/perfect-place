'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable('users', {

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
            'social_id': {
                type: Sequelize.STRING
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

        return queryInterface.dropTable('users');
    }
};