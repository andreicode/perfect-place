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

        name: faker.name.findName(),
        createdAt: faker.date.past(1),
        updatedAt: faker.date.recent(),
        email: faker.internet.email(),
        social_id: faker.random.alphaNumeric(60),
        avatar: faker.image.avatar()

      });

    }



    return queryInterface.bulkInsert('Users', users, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
