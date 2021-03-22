const router = require("express").Router();
const { Location, Patient, Register } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, async (req, res) => {
  try {
    const locationData = await Location.create({
      ...req.body,
      patientId: req.session.patientId,
      // locationId: req.session.locationId,
    });

    req.session.save(() => {
      req.session.locationId = locationData.id;
      req.session.practiceName = locationData.practiceName;
    
      console.log(locationData)
    res.status(200).json(locationData);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", (req, res) => {
  Location.findOne({
    where: {
      id: req.session.patientId,
    },
    // include: [{ model: db.Patient }],
    // attributes: {
    //   include: [ "id", "email", "name", "cellPhone" ]
    // }
  })
    .then((locationData) => {
      console.log(locationData);
      if (!locationData) {
        res.status(404).json({ message: "No location found with that id!" });
        return;
      }
      res.json(locationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.patientId,
        locationId: req.params.locationId
        // user_id: req.session.user_id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;