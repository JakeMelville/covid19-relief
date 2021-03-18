const router = require('express').Router();

const userRoutes = require('./patientRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
