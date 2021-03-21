const { Patient } = require("../models");

  const patientData = [
    {
      name: "Tanner",
      email: "tanner@gamil.com",
      password: "password123",
      cellPhone: "7325684561",
    },
    {
      name: "Tony",
      email: "tonystar@yahoo.com",
      password: "password456",
      cellPhone: "9868457851",
    },
    {
      name: "Grey",
      email: "mergrey@gmail.com",
      password: "password789",
      cellPhone: "8625419865",
    },
  ];
  
  const seedPatient = () => Patient.bulkCreate(patientData);
  
  module.exports = seedPatient;



