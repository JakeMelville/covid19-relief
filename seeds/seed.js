const sequelize = require('../config/connection');
<<<<<<< HEAD
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
=======
const { Patient, Location } = require('../models');

const patientSeedData = require('./pateintSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await Patient.bulkCreate(patientSeedData);

  const locations = await Location.bulkCreate(locationSeedData);
}

  seedDatabase();
>>>>>>> 522b65f58e68181f3ae251ed4ac44d59bec17c22
