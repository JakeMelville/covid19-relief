const seedLocation = require("./locationSeedData");
// const seedPatients = require('./patientSeedData');
const seedUsers = require("./patientData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  // await seedPatients();
  // console.log('\n----- PATIENT SEEDED -----\n');

  await seedLocation();
  console.log("\n----- LOCATION SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
