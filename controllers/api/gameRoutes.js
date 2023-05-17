const router = require("express").Router();
const { Game, User, Gamereview } = require("../../models");

// GET all gameReviews
router.get("/", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.findAll({
      include: [{ model: User }, { model: Game }], // include the User, and Game model
        });
    res.status(200).json(gamereviewData); // return the gameReviewData
  } catch (err) {
    res.status(500).json(err); // if there is an error, return the error
  }
});

// Add a new Game Review
router.post("/", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.create({
      // create a new gameReview
      rating: req.body.rating, // set the rating to the request body's rating
      description: req.body.description, // set the description to the request body's description
      game_id: req.body.game_id, // set the game_id to the request body's game_id
      user_id: req.body.user_id, // set the user_id to the request body's user_id
    });
    res.status(200).json(gamereviewData); // return the gameReviewData
  } catch (err) {
    res.status(400).json(err); // if there is an error, return the error
  }
});

// Delete a Game Review
router.delete("/:id", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.destroy({
      // delete a gameReview
      where: {
        id: req.params.id, // based on the gameReview's id
      },
    });

    if (!gamereviewData) {
      res.status(404).json({ message: "No gamereview found with this id!" }); // if no gameReview is found, return the message
      return;
    }

    res.status(200).json(gamereviewData); // return the gameReviewData
  } catch (err) {
    res.status(500).json(err); // if there is an error, return the error
  }
});

router.put("/:id", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.update(req.body, {
      // update a gameReview
      where: {
        id: req.params.id, // based on the gameReview's id
      },
    });
    if (!gamereviewData) {
      res.status(404).json({ message: "No gamereview found with this id!" }); // if no gameReview is found, return the message
      return;
    }
    res.status(200).json(gamereviewData); // return the gameReviewData
  } catch (err) {
    res.status(500).json(err); // if there is an error, return the error
  }
});

module.exports = router; // export the router
