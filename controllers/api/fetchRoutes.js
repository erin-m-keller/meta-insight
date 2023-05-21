const router = require("express").Router(); // import express router
const fetch = require("node-fetch"); // import fetch

const tryToFetch = async (url, options) => { // try to fetch data from url function
  try {
    const response = await fetch(url, { // fetch data from url
      method: "GET", // set method
      headers: { // set headers
        "Content-Type": "application/json",
      },
    });
    const json = await response.json(); // get json response
    return json; // return json
  } catch (err) { // catch error if any
    console.log(err); // log error
  }
};

// Fetch call all games /games
router.get("/games", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by id /games/:id
router.get("/games/id/:id", async (req, res) => {
  try {
    const game = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    );    
    res.render("gamedetails", { // render games.handlebars
      logged_in: req.session.logged_in, // Pass logged_in to the template
      url: req.url, // Pass url to the template
      games: game, // Pass the fetched game to the templat
    });
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by page /games/:page
router.get("/games/page/:page", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by page and page size /games/:page/:page_size
router.get("/games/page/:page/:page_size", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by search /games/search/:search
router.get("/games/search/:search", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by search and page /games/search/:search/:page
router.get("/games/search/:search/:page", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call games by search and page and page size /games/search/:search/:page/:page_size
router.get("/games/search/:search/:page/:page_size", async (req, res) => {
  try {
    const games = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(games); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all platforms /platforms
router.get("/platforms", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by id /platforms/:id
router.get("/platforms/id/:id", async (req, res) => {
  try {
    const platform = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(platform); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by page /platforms/:page
router.get("/platforms/page/:page", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by page and page size /platforms/:page/:page_size
router.get("/platforms/page/:page/:page_size", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by search /platforms/search/:search
router.get("/platforms/search/:search", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by search and page /platforms/search/:search/:page
router.get("/platforms/search/:search/:page", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call platforms by search and page and page size /platforms/search/:search/:page/:page_size
router.get("/platforms/search/:search/:page/:page_size", async (req, res) => {
  try {
    const platforms = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(platforms); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all genres /genres
router.get("/genres", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by id /genres/:id
router.get("/genres/id/:id", async (req, res) => {
  try {
    const genre = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(genre); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by page /genres/:page
router.get("/genres/page/:page", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by page and page size /genres/:page/:page_size
router.get("/genres/page/:page/:page_size", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by search /genres/search/:search
router.get("/genres/search/:search", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by search and page /genres/search/:search/:page
router.get("/genres/search/:search/:page", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call genres by search and page and page size /genres/search/:search/:page/:page_size
router.get("/genres/search/:search/:page/:page_size", async (req, res) => {
  try {
    const genres = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/genres?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(genres); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all stores /stores
router.get("/stores", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by id /stores/:id
router.get("/stores/id/:id", async (req, res) => {
  try {
    const store = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(store); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by page /stores/:page
router.get("/stores/page/:page", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by page and page size /stores/:page/:page_size
router.get("/stores/page/:page/:page_size", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by search /stores/search/:search
router.get("/stores/search/:search", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by search and page /stores/search/:search/:page
router.get("/stores/search/:search/:page", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call stores by search and page and page size /stores/search/:search/:page/:page_size
router.get("/stores/search/:search/:page/:page_size", async (req, res) => {
  try {
    const stores = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/stores?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(stores); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all developers /developers
router.get("/developers", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by id /developers/:id
router.get("/developers/id/:id", async (req, res) => {
  try {
    const developer = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(developer); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by page /developers/:page
router.get("/developers/page/:page", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by page and page size /developers/:page/:page_size
router.get("/developers/page/:page/:page_size", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by search /developers/search/:search
router.get("/developers/search/:search", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by search and page /developers/search/:search/:page
router.get("/developers/search/:search/:page", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call developers by search and page and page size /developers/search/:search/:page/:page_size
router.get("/developers/search/:search/:page/:page_size", async (req, res) => {
  try {
    const developers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(developers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all publishers /publishers
router.get("/publishers", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by id /publishers/:id
router.get("/publishers/id/:id", async (req, res) => {
  try {
    const publisher = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(publisher); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by page /publishers/:page
router.get("/publishers/page/:page", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by page and page size /publishers/:page/:page_size
router.get("/publishers/page/:page/:page_size", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by search /publishers/search/:search
router.get("/publishers/search/:search", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by search and page /publishers/search/:search/:page
router.get("/publishers/search/:search/:page", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call publishers by search and page and page size /publishers/search/:search/:page/:page_size
router.get("/publishers/search/:search/:page/:page_size", async (req, res) => {
  try {
    const publishers = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(publishers); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call all tags /tags
router.get("/tags", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by id /tags/:id
router.get("/tags/id/:id", async (req, res) => {
  try {
    const tag = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags/${req.params.id}?key=${process.env.API_KEY}`
    );
    res.status(200).json(tag); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by page /tags/:page
router.get("/tags/page/:page", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by page and page size /tags/:page/:page_size
router.get("/tags/page/:page/:page_size", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by search /tags/search/:search
router.get("/tags/search/:search", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&search=${req.params.search}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by search and page /tags/search/:search/:page
router.get("/tags/search/:search/:page", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

// Fetch call tags by search and page and page size /tags/search/:search/:page/:page_size
router.get("/tags/search/:search/:page/:page_size", async (req, res) => {
  try {
    const tags = await tryToFetch( // try to fetch data from url
      `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&search=${req.params.search}&page=${req.params.page}&page_size=${req.params.page_size}`
    );
    res.status(200).json(tags); // send json response
  } catch (err) { // catch error if any
    res.status(500).json(err); // send error response
  }
});

module.exports = router; // export the router
