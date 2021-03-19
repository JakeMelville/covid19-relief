const router = require("express").Router();

const patientRoutes = require("./patientRoutes");
const locationRoutes = require("./locationRoutes");
const registerRoutes = require("./registerRoutes");

// URL: /api/patient
router.use("/patient", patientRoutes);
 
// URL: /api/location
router.use("/location", locationRoutes);

// URL: /api/register
router.use("/register", registerRoutes);

module.exports = router;
