const Patient = require("./Patient");
const Location = require("./Location");
const Register = require("./Register");

Location.belongsToMany(Patient, {
  through: {
    model: Register,
    unique: false,
  },
  as: "location_patient",
});

Patient.belongsToMany(Location, {
  through: {
    model: Register,
    unique: false,
  },
  as: "user_register",
});

module.exports = { Patient, Location, Register };
