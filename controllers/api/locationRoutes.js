const router = require("express").Router();
const { Location, Patient, Register } = require("../../models");
// const withAuth = require("../../utils/auth");

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const patientLocation = await Location.create({
//       ...req.body,
//       patientId: req.session.patientId,
//     });

//     res.status(200).json(patientLocation);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // router.get("/:id", async (req, res) => {
// //   try {
// //     const locationData = await Location.findOne(req.params.id, {
// //       include: [{ model: Patient, through: Register, as: "location_patient" }],
// //     });

// //     if (!locationData) {
// //       res.status(404).json({ message: "No location found with this id!" });
// //       return;
// //     }

// //     res.status(200).json(locationData);
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// router.delete("/:id", withAuth, async (req, res) => {
//   try {
//     const locationData = await Location.destroy({
//       where: {
//         id: req.params.id,
//         patientId: req.session.patientId,
//       },
//     });

//     if (!locationData) {
//       res.status(404).json({ message: "No location found with this id!" });
//       return;
//     }

//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

// URL: /api/location/
router.post("/", async (req, res) => {
  console.log("POST /api/location/");
  try {
    const locationData = await Location.create({
      practiceName: req.body.practiceName,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
    });

    req.session.save(() => {
      req.session.locationId = locationData.id;
      req.session.practiceName = patientData.practiceName;
      req.session.streetAddress = patientData.streetAddress;
      req.session.city = patientData.city;
      req.session.state = patientData.state;
      req.session.zip = patientData.zip;
      req.session.loggedIn = true;

      res.status(410).redirect("/");
      // res.status(410).redirect('/myProfile')
      res.json({ locationData, message: "You have successfully signed up!" });
      // return res.status(410).redirect('/myProfile')
      // res.json(patientData)
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  Location.findOne({
    where: {
      id: req.session.locationId,
    },
    // include: [{ model: db.Patient }],
    // attributes: {
    //   include: [ "id", "email", "name", "cellPhone" ]
    // }
  })
    .then((locationData) => {
      console.log(locationData);
      if (!locationData) {
        res.status(404).json({ message: "No category found with that id!" });
        return;
      }
      res.json(locationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/', (req, res) => {
//   res.render('myProfile', { name: name }, { email: email }, { cellPhone: cellPhone });
// })

router.get("/signup", (req, res) => {
  console.log("/signup git");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
