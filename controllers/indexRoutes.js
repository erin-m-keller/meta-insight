const router = require("express").Router(),
      axios = require('axios');

router.get('/', async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in,
      url: req.url
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  // login route
  try {
    if (req.session.logged_in) {
      res.redirect('/'); // render homepage.handlebars
      return;
    }
    res.render('login', { // render login.handlebars
      url: req.url
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/games", async (req, res) => {
  // games route
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`),
          games = response.data.results;
    res.render("games", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      games: games, // Pass the fetched games to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/platforms", async (req, res) => {
  // platforms route
  try {
    const response = await axios.get(`https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`),
          platforms = response.data.results;
    res.render("platforms", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      platforms: platforms, // Pass the fetched platforms to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/genres", async (req, res) => {
  // genres route
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${process.env.API_KEY}`),
          genres = response.data.results;
    res.render("genres", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      genres: genres, // Pass the fetched genres to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/publishers", async (req, res) => {
  // publishers route
  try {
    const response = await axios.get(`https://api.rawg.io/api/publishers?key=${process.env.API_KEY}`),
          publishers = response.data.results;
    res.render("publishers", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      publishers: publishers, // Pass the fetched publishers to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/tags", async (req, res) => {
  // tags route
  try {
    const response = await axios.get(`https://api.rawg.io/api/tags?key=${process.env.API_KEY}`),
          tags = response.data.results;
    res.render("tags", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      tags: tags, // Pass the fetched tags to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/reviews", async (req, res) => {
  // reviews route
  try {
    const response = await axios.get(`https://api.rawg.io/api/reviews?key=${process.env.API_KEY}`),
          reviews = response.data.results;
    res.render("reviews", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      reviews: reviews, // Pass the fetched reviews to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

module.exports = router; // export router
