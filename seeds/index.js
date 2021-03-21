const seedLocation = require("./locationSeedData");
const seedPatient = require("./patientData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedLocation();
  console.log("\n----- LOCATION SEEDED -----\n");

  await seedPatient();
  console.log("\n----- PATIENT SEEDED -----\n");

  process.exit(0);
};

seedAll();

