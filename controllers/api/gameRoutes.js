const apiKey = process.env.API_KEY;

const router = require("express").Router();
const { Game, User, Gamereview } = require("../../models");
const fetch = require("node-fetch");

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

// Fetch call
router.get("/games", async (req, res) => {
  try {
    const gameData = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const games = await gameData.json();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /platforms
router.get("/platforms", async (req, res) => {
  try {
    const platformData = await fetch(
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const platforms = await platformData.json();
    res.status(200).json(platforms);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /genres
router.get("/genres", async (req, res) => {
  try {
    const genreData = await fetch(
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const genres = await genreData.json();
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /stores
router.get("/stores", async (req, res) => {
  try {
    const storeData = await fetch(
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const stores = await storeData.json();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /developers
router.get("/developers", async (req, res) => {
  try {
    const developerData = await fetch(
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const developers = await developerData.json();
    res.status(200).json(developers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /publishers
router.get("/publishers", async (req, res) => {
  try {
    const publisherData = await fetch(
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const publishers = await publisherData.json();
    res.status(200).json(publishers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call /tags
router.get("/tags", async (req, res) => {
  try {
    const tagData = await fetch(
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tags = await tagData.json();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
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
