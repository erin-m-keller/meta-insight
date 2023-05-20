const router = require("express").Router(),
  axios = require("axios"),
  { User, Review, Game } = require("../models"),
  withAuth = require("../utils/auth");

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
      logged_in_id: req.session.logged_in_id,
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
      res.redirect("/"); // render homepage.handlebars
      return;
    }
    res.render("login", {
      // render login.handlebars
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/games", async (req, res) => {
  // games route
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
      ),
      games = response.data.results;
    res.render("games", {
      // render games.handlebars
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
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
      ),
      game = response.data; // Retrieve the game data based on the ID
    // get all posts from the database to populate the home page
    const reviewsData = await Review.findAll({
      where: { game_id: req.params.id }, // Filter reviews by game_id
      order: [["date_created", "DESC"]], // Order by date_created, descending
      include: [
        {
          model: User, // Include User model to retrieve username
          attributes: ["username"], // Return the username attribute
        },
      ],
    });
    // transform post data into javascript object
    const reviews = reviewsData.map((review) => review.get({ plain: true }));
    res.render("gamedetails", {
      // render gamedetails.handlebars
      logged_in: req.session.logged_in,
      logged_in_id: req.session.logged_in_id,
      url: req.url,
      game: game,
      reviews: reviews,
    });
  } catch (err) {
    res.status(500).json({ message: reviews });
  }
});

router.get("/platforms", async (req, res) => {
  // platforms route
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
      ),
      platforms = response.data.results;
    res.render("platforms", {
      // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      platforms: platforms, // Pass the fetched platforms to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/platforms/:id", async (req, res) => {
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/platforms/${req.params.id}?key=${process.env.API_KEY}`
      ),
      platform = response.data; // Retrieve the platform data based on the ID
    const gamesData = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results;
    res.render("platformdetails", {
      // render platformdetails.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      platform: platform,
      games: games,
    });
  } catch (err) {
    res.status(500).json({ message: reviews });
  }
});

router.get("/genres", async (req, res) => {
  // genres route
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
      ),
      genres = response.data.results;
    res.render("genres", {
      // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      genres: genres, // Pass the fetched genres to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/genres/:id", async (req, res) => {
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/genres/${req.params.id}?key=${process.env.API_KEY}`
      ),
      genre = response.data; // Retrieve the genre data based on the ID
    const gamesData = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results;
    res.render("genredetails", {
      // render genredetails.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      genre: genre,
      games: games,
    });
  } catch (err) {
    res.status(500).json({ message: reviews });
  }
});

router.get("/publishers", async (req, res) => {
  // publishers route
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}`
      ),
      publishers = response.data.results;
    res.render("publishers", {
      // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      publishers: publishers, // Pass the fetched publishers to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/publishers/:id", async (req, res) => {
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/publishers/${req.params.id}?key=${process.env.API_KEY}`
      ),
      publisher = response.data; // Retrieve the publisher data based on the ID
    const gamesData = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&publishers=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results;
    res.render("publisherdetails", {
      // render publisherdetails.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      publisher: publisher,
      games: games,
    });
  } catch (err) {
    res.status(500).json({ message: reviews });
  }
});

router.get("/tags", async (req, res) => {
  // tags route
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/tags?key=${process.env.API_KEY}`
      ),
      tags = response.data.results;
    res.render("tags", {
      // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      tags: tags, // Pass the fetched tags to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/tags/:id", async (req, res) => {
  try {
    const response = await axios.get(
        `https://api.rawg.io/api/tags/${req.params.id}?key=${process.env.API_KEY}`
      ),
      tag = response.data; // Retrieve the tag data based on the ID
    const gamesData = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&tags=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results;
    res.render("tagdetails", {
      // render tagdetails.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      tag: tag,
      games: games,
    });
  } catch (err) {
    // catch errors
    res.status(500).json({ message: reviews }); // return error
  }
});

router.get("/reviews/:id", withAuth, async (req, res) => {
  // reviews route
  try {
    const userId = req.params.id;
    // get all posts from the database to populate the home page
    const reviewsData = await Review.findAll({
      where: { user_id: userId }, // Filter reviews by user_id
      order: [["date_created", "DESC"]], // Order by date_created, descending
      include: [
        {
          model: Game, // Include Game model to retrieve title
          attributes: ["title"], // Return the title attribute
        },
        {
          model: User, // Include User model to retrieve title
          attributes: ["username"], // Return the username attribute
        },
      ],
    });
    // transform post data into javascript object
    const reviews = reviewsData.map((review) => review.get({ plain: true }));
    res.render("reviews", {
      // render reviews.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      reviews: reviews,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/search/:search", async (req, res) => {
  // search route
  try {
    const searchData = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}&page_size=10`
    );
    const search = searchData.data.results;
    res.render("search", {
      // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
      searchTerm: req.params.search, // Pass the search term to the template
      games: search, // Pass the fetched search to the template
    });
  } catch (err) {
    res.status(500).json(err); // return error
  }
});

module.exports = router; // export router
