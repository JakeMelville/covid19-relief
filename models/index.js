// grabbing the functionality of sequelize as a whole 
const Sequelize = require('sequelize');
// grabbing the connection file 
const sequelize = require('../config/connection');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
});

User.sync();




// exporting the enitre table
module.exports = User