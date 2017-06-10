const chance = new require('chance')()

const faker = require('faker');

const db = require('./models/index.js');

const User = db.User;

User.findById(4500).then(function (user) {

    console.log(user.get('name'));

});