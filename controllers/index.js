const router = require('express').Router();
const apiControllers = require('./api/user-routes');

router.use('/api', apiControllers);

module.exports = router;