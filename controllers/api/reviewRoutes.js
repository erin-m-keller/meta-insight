const router = require('express').Router(),
      { User, Review, Game } = require('../../models');

  /**
 * @addReview
 * Allows the user to add a comment
 * to a blog post
 */
  router.post('/add', async (req, res) => {
    try {
      const foundGame = await Game.findByPk(req.body.game_id);
      if (!foundGame) {
        await Game.create({
          id: req.body.game_id
        });
      }
      const newReview = await Review.create({
        description: req.body.description,
        user_id: req.body.user_id,
        game_id: req.body.game_id,
        rating: req.body.rating
      });
      const foundReview = await Review.findByPk(newReview.id);
      res.status(200).json({ review: foundReview, message: 'Review added successfully.' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

/**
 * @getReviews
 * Gets the reviews for the current
 * game that is loaded
 */
router.get('/getReviews/:gameId', async (req, res) => {
  // check if code throws an error
  try {
    // initialize variables
    const { gameId } = req.params;
    // fetch comments data for the specified gameId
    const reviewData = await Review.findAll({
      where: { game_id: gameId },
      order: [['date_created', 'DESC']], // Order by date_created, descending
      include: [{ model: User, attributes: ['username'] }],
    });
    // return status 200 along with the comments data
    res.status(200).json(reviewData);
  }
  // catch and handle the error    
  catch (err) {
    // return status 500 and error message
    res.status(500).json(err);
  }
});

// export the routes
module.exports = router;
