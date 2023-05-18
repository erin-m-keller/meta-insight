const router = require("express").Router(),
      axios = require('axios');

      router.get("/", async (req, res) => {
        try {
          const getResponseFunction = async (platformID) => {
            // Fetch games by platform id, sort by rating and get the first 10 results
            const getResponse = await axios.get(
              `https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=${platformID}&ordering=-rating&page_size=10`
            );
            return getResponse.data.results;
          };
      
          const playstation = await getResponseFunction(187);
          const xbox = await getResponseFunction(186);
          const nintendo = await getResponseFunction(7);
          const pc = await getResponseFunction(4);
          const iOS = await getResponseFunction(3);
          const android = await getResponseFunction(21);
      
          res.render("homepage", {
            logged_in: req.session.logged_in,
            url: req.url,
            playstation: playstation,
            xbox: xbox,
            nintendo: nintendo,
            pc: pc,
            iOS: iOS,
            android: android,
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
    console.log(games.length);
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

router.get("/games/:id", async (req, res) => {
  console.log("1 test");
  try {
    console.log("req.params.id: " + req.params.id);
    const response = await axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`);
    const game = response.data; // Retrieve the game data based on the ID

    res.render("gamedetails", { // render gamedetails.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      game: game // Pass the fetched game to the template
    });
  } catch (err) {
    res.status(500).json(err);
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
