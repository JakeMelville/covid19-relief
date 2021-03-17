const sequelize = require('../config/connection');
const { Patient, Location, User } = require('../models');

const patientSeedData = require('./pateintSeedData.json');
const locationSeedData = require('./locationSeedData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await Patient.bulkCreate(patientSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  const users = await User.bulkCreate(userData);

}

  seedDatabase();
