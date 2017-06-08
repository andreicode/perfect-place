'use strict';


const faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const users = [];

    for (var i = 0; i < 1000; i++) {

      users.push({

        name: 'Test',
        created_at: Date.now(),
        updated_at: Date.now(),
        social_id: '1234'

      });

    }



    return queryInterface.bulkInsert('users', users, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('users', null, {});
  }
};
