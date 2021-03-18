const { User } = require('../models');

const userData =[
    {
        username: "Tanner",
        email: "tanner@gamil.com",
        password: "password123"
    },
    {
        username: "Tony",
        email: "tonystar@yahoo.com",
        password: "password456"
    },
    {
        username: "Grey",
        email: "mergrey@gmail.com",
        password: "password789"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;