const router = require("express").Router();
const { Patient, Register, Location } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const patientData = await Patient.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.username = patientData.username;
      req.session.logged_in = true;

      res.json(patientData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { username: req.body.username },
    });

    if (!patient) {
      res.status(404).json({ message: "Login failed, please try again" });
      return;
    }

    const validPassword = await patient.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Login failed, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.username = patientData.username;
      req.session.logged_in = true;

      res.json({ patient, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
