const { Location } = require("../models");

const locationData = [
  {
    practice_name: "Urgent Care",
    street_address: "10 park ave",
    city: "Hackensack",
    state: "NJ",
    zip: "07603",
  },
  {
    practice_name: "CVS",
    street_address: "10 main street",
    city: "Sparta",
    state: "NJ",
    zip: "07871",
  },
  {
    practice_name: "Rite Aid",
    street_address: "10 imperial ave",
    city: "Weehawken",
    state: "NJ",
    zip: "07086",
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
