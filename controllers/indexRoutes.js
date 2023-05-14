const router = require("express").Router();

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

router.get("/", async (req, res) => {
  // homepage route
  try {
    res.render("homepage", { // render homepage.handlebars
      logged_in: req.session.logged_in,
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
    res.render("games", { // render games.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/platforms", async (req, res) => {
  // platforms route
  try {
    res.render("platforms", { // render platforms.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/genres", async (req, res) => {
  // genres route
  try {
    res.render("genres", { // render genres.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/publishers", async (req, res) => {
  // publishers route
  try {
    res.render("publishers", { // render publishers.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});
  
router.get("/tags", async (req, res) => {
  // tags route
  try {
    res.render("tags", { // render tags.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/reviews", async (req, res) => {
  // reviews route
  try {
    res.render("reviews", { // render reviews.handlebars
      logged_in: req.session.logged_in,
      url: req.url,
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

module.exports = router; // export router
