const router = require('express').Router(),
      { User, Review } = require('../../models');

  /**
 * @addReview
 * Allows the user to add a comment
 * to a blog post
 */
router.post('/add', async (req, res) => {
  // check if code throws an error
  try {
    // create a new comment
    const newReview = await Comment.create({
        comment_content: req.body.comment_content, // comment body
        user_id: req.body.user_id, // user id
        post_id: req.body.post_id // post id
    });
    // find the new comment
    const foundReview = await Review.findByPk(newReview.id);
    // return status 200 along with the comment data and a success message
    res.status(200).json({ review: foundReview, message: 'Review added successfully.' });
  }
  // catch and handle the error   
  catch (err) {
    // return status 500 and error message
    res.status(500).json(err);
  }
});

/**
 * @getComments
 * Gets the comments for the current
 * blog that is loaded
 */
router.get('/getReviews/:gameId', async (req, res) => {
  // check if code throws an error
  try {
    // initialize variables
    const { gameId } = req.params;
    // fetch comments data for the specified blogId
    const reviewData = await Review.findAll({
      where: { game_id: gameId },
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
