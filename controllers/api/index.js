const router = require('express').Router(),      
      authRoutes = require('./authRoutes'),
      gameRoutes = require('./gameRoutes'),
      fetchRoutes = require('./fetchRoutes'),
      reviewRoutes = require('./reviewRoutes');

router.use('/auth', authRoutes);
router.use('/game', gameRoutes);
router.use('/fetch', fetchRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
