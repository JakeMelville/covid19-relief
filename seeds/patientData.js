const { Patient } = require("../models");

const patientData = [
  {
    name: "Tanner",
    email: "tanner@gamil.com",
    password: "password123",
<<<<<<< HEAD
    cellPhone: "7325684561",
=======
    cell_phone: "7325684561",
>>>>>>> dhruvi94
  },
  {
    name: "Tony",
    email: "tonystar@yahoo.com",
    password: "password456",
<<<<<<< HEAD
    cellPhone: "9868457851",
=======
    cell_phone: "9868457851",
>>>>>>> dhruvi94
  },
  {
    name: "Grey",
    email: "mergrey@gmail.com",
    password: "password789",
<<<<<<< HEAD
    cellPhone: "8625419865",
=======
    cell_phone: "8625419865",
>>>>>>> dhruvi94
  },
];

const seedPatient = () => Patient.bulkCreate(patientData);

module.exports = seedPatient;
