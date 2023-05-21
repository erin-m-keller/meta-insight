const router = require('express').Router(), // import router  
      authRoutes = require('./authRoutes'), // import auth routes
      gameRoutes = require('./gameRoutes'), // import game routes
      fetchRoutes = require('./fetchRoutes'), // import fetch routes
      reviewRoutes = require('./reviewRoutes'); // import review routes

router.use('/auth', authRoutes); // use auth routes
router.use('/game', gameRoutes); // use game routes
router.use('/fetch', fetchRoutes); // use fetch routes
router.use('/review', reviewRoutes); // use review routes

module.exports = router; // export router
