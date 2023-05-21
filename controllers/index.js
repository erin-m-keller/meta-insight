const router = require('express').Router(); // import router
const apiRoutes = require('./api'); // import api routes
const indexRoutes = require('./indexRoutes'); // import index routes

router.use('/', indexRoutes); // use index routes
router.use('/api', apiRoutes); // use api routes

module.exports = router; // export router
