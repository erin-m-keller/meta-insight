const router = require("express").Router(); // import express router
const fetch = require("node-fetch"); // import fetch

// Fetch call all games /games
router.get("/games", async (req, res) => {
  try {
    const gameData = await fetch(
      // fetch call to the api
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

// Fetch call games by id /games/:id
router.get("/games/:id", async (req, res) => {
  try {
    const gameData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/games/?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const game = await gameData.json();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call games by page /games/:page
router.get("/games/:page", async (req, res) => {
  try {
    const gameData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/games/?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const game = await gameData.json();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call games by search /games/search/:search
router.get("/games/search/:search", async (req, res) => {
  try {
    const gameData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const game = await gameData.json();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call games by search and page /games/search/:search/:page
router.get("/games/search/:search/:page", async (req, res) => {
  try {
    const gameData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const game = await gameData.json();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all platforms /platforms
router.get("/platforms", async (req, res) => {
  try {
    const platformData = await fetch(
      // fetch call to the api
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

// Fetch call platforms by id /platforms/:id
router.get("/platforms/:id", async (req, res) => {
  try {
    const platformData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const platform = await platformData.json();
    res.status(200).json(platform);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call platforms by page /platforms/:page
router.get("/platforms/:page", async (req, res) => {
  try {
    const platformData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const platform = await platformData.json();
    res.status(200).json(platform);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call platforms by search /platforms/search/:search
router.get("/platforms/search/:search", async (req, res) => {
  try {
    const platformData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const platform = await platformData.json();
    res.status(200).json(platform);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call platforms by search and page /platforms/search/:search/:page
router.get("/platforms/search/:search/:page", async (req, res) => {
  try {
    const platformData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const platform = await platformData.json();
    res.status(200).json(platform);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all genres /genres
router.get("/genres", async (req, res) => {
  try {
    const genreData = await fetch(
      // fetch call to the api
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

// Fetch call genres by id /genres/:id
router.get("/genres/:id", async (req, res) => {
  try {
    const genreData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const genre = await genreData.json();
    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call genres by page /genres/:page
router.get("/genres/:page", async (req, res) => {
  try {
    const genreData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const genre = await genreData.json();
    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call genres by search /genres/search/:search
router.get("/genres/search/:search", async (req, res) => {
  try {
    const genreData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const genre = await genreData.json();
    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call genres by search and page /genres/search/:search/:page
router.get("/genres/search/:search/:page", async (req, res) => {
  try {
    const genreData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const genre = await genreData.json();
    res.status(200).json(genre);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all stores /stores
router.get("/stores", async (req, res) => {
  try {
    const storeData = await fetch(
      // fetch call to the api
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

// Fetch call stores by id /stores/:id
router.get("/stores/:id", async (req, res) => {
  try {
    const storeData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const store = await storeData.json();
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call stores by page /stores/:page
router.get("/stores/:page", async (req, res) => {
  try {
    const storeData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const store = await storeData.json();
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call stores by search /stores/search/:search
router.get("/stores/search/:search", async (req, res) => {
  try {
    const storeData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const store = await storeData.json();
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call stores by search and page /stores/search/:search/:page
router.get("/stores/search/:search/:page", async (req, res) => {
  try {
    const storeData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const store = await storeData.json();
    res.status(200).json(store);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all developers /developers
router.get("/developers", async (req, res) => {
  try {
    const developerData = await fetch(
      // fetch call to the api
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

// Fetch call developers by id /developers/:id
router.get("/developers/:id", async (req, res) => {
  try {
    const developerData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const developer = await developerData.json();
    res.status(200).json(developer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call developers by page /developers/:page
router.get("/developers/:page", async (req, res) => {
  try {
    const developerData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const developer = await developerData.json();
    res.status(200).json(developer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call developers by search /developers/search/:search
router.get("/developers/search/:search", async (req, res) => {
  try {
    const developerData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const developer = await developerData.json();
    res.status(200).json(developer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call developers by search and page /developers/search/:search/:page
router.get("/developers/search/:search/:page", async (req, res) => {
  try {
    const developerData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const developer = await developerData.json();
    res.status(200).json(developer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all publishers /publishers
router.get("/publishers", async (req, res) => {
  try {
    const publisherData = await fetch(
      // fetch call to the api
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

// Fetch call publishers by id /publishers/:id
router.get("/publishers/:id", async (req, res) => {
  try {
    const publisherData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const publisher = await publisherData.json();
    res.status(200).json(publisher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call publishers by page /publishers/:page
router.get("/publishers/:page", async (req, res) => {
  try {
    const publisherData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const publisher = await publisherData.json();
    res.status(200).json(publisher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call publishers by search /publishers/search/:search
router.get("/publishers/search/:search", async (req, res) => {
  try {
    const publisherData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const publisher = await publisherData.json();
    res.status(200).json(publisher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call publishers by search and page /publishers/search/:search/:page
router.get("/publishers/search/:search/:page", async (req, res) => {
  try {
    const publisherData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const publisher = await publisherData.json();
    res.status(200).json(publisher);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call all tags /tags
router.get("/tags", async (req, res) => {
  try {
    const tagData = await fetch(
      // fetch call to the api
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

// Fetch call tags by id /tags/:id
router.get("/tags/:id", async (req, res) => {
  try {
    const tagData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&id=${req.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tag = await tagData.json();
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call tags by page /tags/:page
router.get("/tags/:page", async (req, res) => {
  try {
    const tagData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tag = await tagData.json();
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call tags by search /tags/search/:search
router.get("/tags/search/:search", async (req, res) => {
  try {
    const tagData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&search=${req.params.search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tag = await tagData.json();
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Fetch call tags by search and page /tags/search/:search/:page
router.get("/tags/search/:search/:page", async (req, res) => {
  try {
    const tagData = await fetch(
      // fetch call to the api
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tag = await tagData.json();
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; // export the router
