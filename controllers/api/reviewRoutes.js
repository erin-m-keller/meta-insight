const router = require('express').Router(), // import express router
      { User, Review, Game } = require('../../models'); // import user, comment, and post models

  /**
 * @addReview
 * Allows the user to add a comment
 * to a blog post
 */
  router.post('/add', async (req, res) => { // add a comment
    try { // try to execute this code
      const foundGame = await Game.findByPk(req.body.game_id); // find the game by its id
      if (!foundGame) { // if the game is not found
        await Game.create({ // create a new game
          id: req.body.game_id, // set the id to the request body's game_id
          title: req.body.title // set the title to the request body's title
        });
      }
      const newReview = await Review.create({ // create a new comment
        description: req.body.description, // set the description to the request body's description
        user_id: req.body.user_id, // set the user_id to the request body's user_id
        game_id: req.body.game_id, // set the game_id to the request body's game_id
        rating: req.body.rating // set the rating to the request body's rating
      });
      const foundReview = await Review.findByPk(newReview.id); // find the comment by its id
      res.status(200).json({ review: foundReview, message: 'Review added successfully.' }); // return the comment and a success message
    } catch (err) { // if there is an error
      res.status(500).json(err); // return the error
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
    const { gameId } = req.params; // get the gameId from the request parameters
    // fetch comments data for the specified gameId
    const reviewData = await Review.findAll({ // find all comments
      where: { game_id: gameId }, // where the game_id is equal to the gameId
      order: [['date_created', 'DESC']], // Order by date_created, descending
      include: [{ model: User, attributes: ['username'] }], // include the User model, and only return the username
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
