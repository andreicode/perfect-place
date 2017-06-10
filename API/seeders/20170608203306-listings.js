'use strict';

const faker = require('faker');
const chance = new require('chance')()


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

    const listings = [];

    for (let i = 0; i < 1000; i++) {
      listings.push({
        title: faker.company.companyName(),
        description: faker.lorem.paragraph(faker.random.number({min:3, max:7})),
        lat: chance.latitude({ min: 51.337815, max: 51.677150 }),
        long: chance.longitude({ min: -0.440848, max: 0.124948 }),
        createdAt: faker.date.past(1),
        updatedAt: faker.date.recent(),
        price: faker.commerce.price(),
        
      })
    }

    return queryInterface.bulkInsert('Listings', listings, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
