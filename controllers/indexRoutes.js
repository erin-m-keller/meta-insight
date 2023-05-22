const router = require("express").Router(), // import express router
  axios = require("axios"), // import axios
  { User, Review, Game } = require("../models"), // import models
  withAuth = require("../utils/auth"); // import withAuth middleware

router.get("/", async (req, res) => { // homepage route
  try {
    const getResponseFunction = async (platformID) => { // async function to fetch games by platform id
      // Fetch games by platform id, sort by rating and get the first 10 results
      const getResponse = await axios.get(
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=${platformID}&ordering=-rating&page_size=10`
      );
      return getResponse.data.results; // return the results of the get request
    };

    const playstation = await getResponseFunction(187); // get playstation games by platform id 187
    const xbox = await getResponseFunction(186); // get xbox games by platform id 186
    const nintendo = await getResponseFunction(7); // get nintendo games by platform id 7
    const pc = await getResponseFunction(4); // get pc games by platform id 4
    const iOS = await getResponseFunction(3); // get iOS games by platform id 3
    const android = await getResponseFunction(21); // get android games by platform id 21

    res.render("homepage", { // render homepage.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      playstation: playstation, // pass playstation games array to template
      xbox: xbox, // pass xbox games array to template
      nintendo: nintendo, // pass nintendo games array to template
      pc: pc, // pass pc games array to template
      iOS: iOS, // pass iOS games array to template
      android: android, // pass android games array to template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json(err); // return error status 500
  }
});

router.get("/login", async (req, res) => {
  // login route
  try {
    if (req.session.logged_in) { // if user is logged in
      res.redirect("/"); // render homepage.handlebars
      return; // then return
    }
    res.render("login", {
      // render login.handlebars
      url: req.url, // pass url session variable
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/games", async (req, res) => {
  // games route
  try {
    const response = await axios.get( // fetch games from api
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}`
      ),
      games = response.data.results; // get the results from the response
    res.render("games", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      games: games, // Pass the fetched games to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/games/:id", async (req, res) => { // games route
  try {
    const response = await axios.get( // fetch game from api
        `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
      ),
      game = response.data; // Retrieve the game data based on the ID
    // get all posts from the database to populate the home page
    const reviewsData = await Review.findAll({ // get all reviews
      where: { game_id: req.params.id }, // Filter reviews by game_id
      order: [["date_created", "DESC"]], // Order by date_created, descending
      include: [ // include game and user models
        {
          model: User, // Include User model to retrieve username
          attributes: ["username"], // Return the username attribute
        },
      ],
    });
    // transform post data into javascript object
    const reviews = reviewsData.map((review) => review.get({ plain: true })); // get reviews
    res.render("gamedetails", {
      // render gamedetails.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      game: game, // pass game object to template
      reviews: reviews, // pass reviews array to template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json({ message: reviews }); // return error status 500
  }
});

router.get("/platforms", async (req, res) => {
  // platforms route
  try {
    const response = await axios.get( // fetch platforms from api
        `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`
      ),
      platforms = response.data.results; // get the results from the response
    res.render("platforms", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      platforms: platforms, // Pass the fetched platforms to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/platforms/:id", async (req, res) => { // platforms route
  try {
    const response = await axios.get( // fetch platform from api
        `https://api.rawg.io/api/platforms/${req.params.id}?key=${process.env.API_KEY}`
      ),
      platform = response.data; // Retrieve the platform data based on the ID
    const gamesData = await axios.get( // fetch games from api
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&platforms=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results; // get the results from the response
    res.render("platformdetails", {
      // render platformdetails.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      platform: platform, // pass platform object to template
      games: games, // pass games array to template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json({ message: reviews }); // return error status 500
  }
});

router.get("/genres", async (req, res) => {
  // genres route
  try {
    const response = await axios.get( // fetch genres from api
        `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
      ),
      genres = response.data.results; // get the results from the response
    res.render("genres", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      genres: genres, // Pass the fetched genres to the templat
    });
  } catch (err) { // if error occurs during try block
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/genres/:id", async (req, res) => { // genres route
  try {
    const response = await axios.get( // fetch genre from api
        `https://api.rawg.io/api/genres/${req.params.id}?key=${process.env.API_KEY}`
      ),
      genre = response.data; // Retrieve the genre data based on the ID
    const gamesData = await axios.get( // fetch games from api
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&genres=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results; // get the results from the response
    res.render("genredetails", {
      // render genredetails.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      genre: genre, // pass genre object to template
      games: games, // pass games array to template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json({ message: reviews }); // return error status 500
  }
});

router.get("/publishers", async (req, res) => {
  // publishers route
  try {
    const response = await axios.get( // fetch publishers from api
        `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}`
      ),
      publishers = response.data.results; // get the results from the response
    res.render("publishers", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      publishers: publishers, // Pass the fetched publishers to the templat
    });
  } catch (err) { // if error occurs during try block
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/publishers/:id", async (req, res) => { // publishers route
  try {
    const response = await axios.get( // fetch publisher from api
        `https://api.rawg.io/api/publishers/${req.params.id}?key=${process.env.API_KEY}`
      ),
      publisher = response.data; // Retrieve the publisher data based on the ID
    const gamesData = await axios.get( // fetch games from api
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&publishers=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results; // get the results from the response
    res.render("publisherdetails", {
      // render publisherdetails.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      publisher: publisher, // pass publisher object to template
      games: games, // pass games array to template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json({ message: reviews }); // return error status 500
  }
});

router.get("/tags", async (req, res) => {
  // tags route
  try {
    const response = await axios.get( // fetch tags from api
        `https://api.rawg.io/api/tags?key=${process.env.API_KEY}`
      ),
      tags = response.data.results; // get the results from the response
    res.render("tags", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      tags: tags, // Pass the fetched tags to the templat
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error status 500
  }
});

router.get("/tags/:id", async (req, res) => { // tags route
  try {
    const response = await axios.get( // fetch tag from api
        `https://api.rawg.io/api/tags/${req.params.id}?key=${process.env.API_KEY}`
      ),
      tag = response.data; // Retrieve the tag data based on the ID
    const gamesData = await axios.get( // fetch games from api
        `https://api.rawg.io/api/games?key=${process.env.API_KEY}&tags=${req.params.id}&ordering=-rating&page_size=10`
      ),
      games = gamesData.data.results; // get the results from the response
    res.render("tagdetails", {
      // render tagdetails.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      tag: tag, // pass tag object to template
      games: games, // pass games array to template
    });
  } catch (err) {
    // catch errors
    res.status(500).json({ message: reviews }); // return error status 500
  }
});

router.get("/reviews/:id", withAuth, async (req, res) => {
  // reviews route
  try {
    const userId = req.params.id; // get user id from params
    // get all posts from the database to populate the home page
    const reviewsData = await Review.findAll({ // get all reviews
      where: { user_id: userId }, // Filter reviews by user_id
      order: [["date_created", "DESC"]], // Order by date_created, descending
      include: [ // include game and user models
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
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      reviews: reviews, // pass reviews array to template
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/search/:search", async (req, res) => {
  // search route
  try {
    const searchData = await axios.get( // fetch search from api
      `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${req.params.search}&page_size=10`
    );
    const search = searchData.data.results; // get the results from the response
    res.render("search", {
      // render games.handlebars
      logged_in: req.session.logged_in, // pass logged_in session variable
      logged_in_id: req.session.logged_in_id, // pass logged_in_id session variable
      url: req.url, // pass url session variable
      searchTerm: req.params.search, // Pass the search term to the template
      games: search, // Pass the fetched search to the template
    });
  } catch (err) { // if error occurs during try block
    res.status(500).json(err); // return error status 500
  }
});

module.exports = router; // export router
