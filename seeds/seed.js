const sequelize = require('../config/connection');
const User = require('../../models/User');

const userData = require('./userData.json');

const seedDataBase = async () => {
    await sequelize.sync({ force : true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // for (const { id } of users) {
    //     const newUser = await 
    // }
};

seedDataBase();