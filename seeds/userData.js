const { User } = require('../models');

const userData =[
    {
        username: "Tanner",
        password: "password123"
    },
    {
        username: "Tony",
        password: "password456"
    },
    {
        username: "Grey",
        password: "password789"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;