const { Location } = require("../models");

const locationData = [
  {
    practiceName: "Urgent Care",
    streetAddress: "10 park ave",
    city: "Hackensack",
    state: "NJ",
    zip: "07603",
  },
  {
    practiceName: "CVS",
    streetAddress: "10 main street",
    city: "Sparta",
    state: "NJ",
    zip: "07871",
  },
  {
    practiceName: "Rite Aid",
    streetAddress: "10 imperial ave",
    city: "Weehawken",
    state: "NJ",
    zip: "07086",
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
