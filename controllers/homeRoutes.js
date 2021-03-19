const router = require("express").Router();
const path = require("path");
const { Patient, Location } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  console.log("GET /");
  res.sendFile(path.join(__dirname, "../public/covid.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/myProfile.html"));
});

// router.get("/", async (req, res) => {
//   try {
//     const locationData = await Location.findAll({
//       include: [
//         {
//           model: Patient,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const locations = locationData.map((location) =>
//       location.get({ plain: true })
//     );

//     res.render("covid", {
//       location,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/location/:id", async (req, res) => {
//   try {
//     const locationData = await Location.findOne(req.params.id, {
//       include: [
//         {
//           model: Patient,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const location = locationData.get({ plain: true });

//     res.render("myProfile", {
//       ...location,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/myProfile", withAuth, async (req, res) => {
//   try {
//     const patientData = await Patient.findOne(req.session.userId, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: Location }],
//     });

//     const patient = patientData.get({ plain: true });

//     res.render("myProfile", {
//       ...patient,
//       loggedIn: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/covid");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
