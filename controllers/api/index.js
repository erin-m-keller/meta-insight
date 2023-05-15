const router = require('express').Router(),      
      authRoutes = require('./authRoutes'),
      gameRoutes = require('./gameRoutes'),
      fetchRoutes = require('./fetchRoutes');

router.use('/auth', authRoutes);
router.use('/game', gameRoutes);
router.use('/fetch', fetchRoutes);

module.exports = router;
