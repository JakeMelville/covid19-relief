const router = require("express").Router();

const patientRoutes = require("./patientRoutes");
const locationRoutes = require("./locationRoutes");
const registerRoutes = require("./registerRoutes");

router.use("/patient", patientRoutes);
router.use("/location", locationRoutes);
router.use("/register", registerRoutes);

module.exports = router;
