const router = require("express").Router();
const { Location, Patient, Register } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const patientLocation = await Location.create({
      ...req.body,
      patientId: req.session.patientId,
    });

    res.status(200).json(patientLocation);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const locationData = await Location.findOne(req.params.id, {
//       include: [{ model: Patient, through: Register, as: "location_patient" }],
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
