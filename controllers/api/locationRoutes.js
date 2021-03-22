const router = require("express").Router();
const { Location, Patient, Register } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const locationData = await Location.create({
      ...req.body,
      locationId: req.session.locationId,
    });

    req.session.save(() => {
      req.session.locationId = locationData.locationId;
      // req.session.cellPhone = patientData.cellPhone;
      // req.session.name = patientData.name;
      req.session.loggedIn = true;

    console.log(locationData)
    res.status(200).json(locationData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   Post.findAll({
//     attributes: ["practiceName", "streetAddress", "city", "state", "zip"],
//     include: [
//       {
//         model: Patient,
//         attributes: ["email"],
//       },
//     ],
//   })
//     .then((locationData) => {
//       if (!locationData) {
//         res.status(404).json({ message: "No location found with that id!" });
//         return;
//       }
//       res.json(locationData);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

router.get("/location/:id", withAuth, async (req, res) => {
  try {
    const locationData = await Location.findOne({
      where: { 
        id: req.session.locationId,
    },
  });
    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    console.log(locationData)
    res.json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
        patientId: req.session.patientId,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with this id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// // // URL: /api/location/
// // router.post("/", async (req, res) => {
// //   console.log("POST /api/location/");
// //   try {
// //     const locationData = await Location.create({
// //       practiceName: req.body.practiceName,
// //       streetAddress: req.body.streetAddress,
// //       city: req.body.city,
// //       state: req.body.state,
// //       zip: req.body.zip,
// //     });

// //     req.session.save(() => {
// //       req.session.locationId = locationData.id;
// //       req.session.practiceName = locationData.practiceName;
// //       req.session.streetAddress = locationData.streetAddress;
// //       req.session.city = locationData.city;
// //       req.session.state = locationData.state;
// //       req.session.zip = locationData.zip;
// //       req.session.loggedIn = true;

// //       res.status(410).redirect("/");
// //       // res.json(locationData)
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// // // URL: /api/patient/login
// // router.post("/login", async (req, res) => {
// //   console.log("POST /api/patient/login");
// //   try {
// //     const location = await Patient.findOne({
// //       where: { email: req.body.email },
// //     });
// //     console.log("Location: ", location);

// //     if (!location) {
// //       res.status(404).json({ message: "Login failed, please try again" });
// //       res.status(410).redirect("/login");
// //       return;
// //     }

// //     // const validPassword = await patient.checkPassword(req.body.password);

// //     // if (!validPassword) {
// //     //   res.status(400).json({ message: "Login failed, please try again" });
// //     //   return;
// //     // }

// //     req.session.save(() => {
// //       req.session.locationId = location.id;
// //       req.session.practiceName = location.practiceName;
// //       req.session.streetAddress = location.streetAddress;
// //       req.session.city = location.city;
// //       req.session.state = location.state;
// //       req.session.zip = location.zip;
// //       req.session.loggedIn = true;

// //       res.status(410).redirect("/");
// //       res.json({ patient, message: "You are now logged in!" });
// //     });
// //   } catch (err) {
// //     res.status(400).json({ message: "No user account found!" });
// //   }
// // });

// // router.post("/logout", (req, res) => {
// //   if (req.session.loggedIn) {
// //     req.session.destroy(() => {
// //       res.status(204).end();
// //     });
// //   } else {
// //     res.status(404).end();
// //   }
// // });

// router.get("/location/:id", (req, res) => {
// Location.findOne({
//     where: {
//       id: req.session.locationId,
//     },
//     // include: [{ model: db.Patient }],
//     // attributes: {
//     //   include: [ "id", "email", "name", "cellPhone" ]
//     // }
//   })
//     .then((locationData) => {
//       console.log(locationData);
//       if (!locationData) {
//         res.status(404).json({ message: "No location found with that id!" });
//         return;
//       }
//       res.json(locationData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err)
//     });
// });

// // router.get('/', (req, res) => {
// //   res.render('myProfile', { name: name }, { email: email }, { cellPhone: cellPhone });
// // })

// router.get("/signup", (req, res) => {
//   console.log("/signup git");
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("signup");
// });

// module.exports = router;
