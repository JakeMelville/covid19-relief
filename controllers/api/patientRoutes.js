const router = require("express").Router();
const { Patient, Register, Location } = require("../../models");

// URL: /api/patient/
router.post("/", async (req, res) => {
  console.log("POST /api/patient/")
  try {
    const patientData = await Patient.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      cellPhone: req.body.cellPhone,
    });

    

    req.session.save(() => {
      req.session.patientId = patientData.id;
      req.session.email = patientData.email;
      req.session.loggedIn = true;

      res.json(patientData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// URL: /api/patient/login
router.post("/login", async (req, res) => {
  console.log("POST /api/patient/login")
  try {
    const patient = await Patient.findOne({
      where: { email: req.body.email },
    });
    console.log('Patient: ', patient)
    if (!patient) {
      res.status(404).json({ message: "Login failed, please try again" });
      return;
    }
    

    // const validPassword = await patient.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res.status(400).json({ message: "Login failed, please try again" });
    //   return;
    // }

    req.session.save(() => {
      req.session.patientId = patient.id;
      req.session.name = patient.name;
      req.session.email = patient.email;
      req.session.loggedIn = true;

      res.json({ patient, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });

module.exports = router;
