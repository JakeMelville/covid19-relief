const { Patient } = require('../models');

const patientData =[
    {
        name: "Tanner",
        email: "tanner@gamil.com",
        password: "password123",
        cell_phone: "7325684561"
    },
    {
        name: "Tony",
        email: "tonystar@yahoo.com",
        password: "password456",
        cell_phone: "9868457851"
    },
    {
        name: "Grey",
        email: "mergrey@gmail.com",
        password: "password789",
        cell_phone: "8625419865"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;