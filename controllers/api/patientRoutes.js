const router = require("express").Router();
const { Patient, Register, Location } = require("../../models");

// URL: /api/patient/
router.post("/", async (req, res) => {
  console.log("POST /api/patient/");
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
      req.session.cellPhone = patientData.cellPhone;
      req.session.name = patientData.name;
      req.session.loggedIn = true;

      res.status(410).redirect("/");
      // res.status(410).redirect('/myProfile')
      res.json({ patientData, message: "You have successfully signed up!" });
      // return res.status(410).redirect('/myProfile')
      // res.json(patientData)
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// URL: /api/patient/login
router.post("/login", async (req, res) => {
  console.log("POST /api/patient/login");
  try {
    const patient = await Patient.findOne({
      where: { email: req.body.email },
    });
    console.log("Patient: ", patient);

    if (!patient) {
      res.status(404).json({ message: "Login failed, please try again" });
      res.status(410).redirect("/login");
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

      res.status(410).redirect("/");
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

router.get("/:id", (req, res) => {
  Patient.findOne({
    where: {
      id: req.session.patientId,
    },
    // include: [{ model: db.Patient }],
    // attributes: {
    //   include: [ "id", "email", "name", "cellPhone" ]
    // }
  })
    .then((patientData) => {
      console.log(patientData);
      if (!patientData) {
        res.status(404).json({ message: "No user found with that id!" });
        return;
      }
      res.json(patientData);
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
