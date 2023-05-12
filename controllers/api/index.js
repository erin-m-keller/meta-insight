const router = require('express').Router(),      
      authRoutes = require('./authRoutes'),
      gameRoutes = require('./gameRoutes');

router.use('/auth', authRoutes);
router.use('/game', gameRoutes);

module.exports = router;
