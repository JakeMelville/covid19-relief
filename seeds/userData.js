const { User } = require('../models');

const userData =[
    {
        name: "Tanner",
        email: "tanner@gamil.com",
        password: "password123"
    },
    {
        name: "Tony",
        email: "treeder@yahoo.com",
        password: "password456"
    },
    {
        name: "Grey",
        email: "mergrey@gamil.com",
        password: "password789"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;