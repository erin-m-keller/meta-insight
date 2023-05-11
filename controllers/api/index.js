const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const postRoutes = require('./postRoutes');
// const commentRoutes = require('./commentRoutes');
const gamereviewRoutes = require('./gamereviewRoutes')

// router.use('/users', userRoutes);
// router.use('/post', postRoutes);
// router.use('/comments', commentRoutes);
router.use('/gamereview',gamereviewRoutes);

module.exports = router;
