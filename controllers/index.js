const router = require('express').Router();
const apiRoutes = require('./api');
const indexRoutes = require('./indexRoutes');

router.use('/', indexRoutes);
router.use('/api', apiRoutes);

module.exports = router;
