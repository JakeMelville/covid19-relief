const sequelize = require('../config/connection');
const { Patient, Location } = require('../models');

const patientSeedData = require('./pateintSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await Patient.bulkCreate(travellerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);
}

  seedDatabase();