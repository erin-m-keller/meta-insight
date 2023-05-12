const router = require('express').Router(),      
      authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);
// const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoutes');
// const commentRoutes = require('./commentRoutes');

// router.use('/users', userRoutes);
// router.use('/post', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
