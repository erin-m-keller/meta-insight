const router = require("express").Router(),
      withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  // login route
  try {
    if (req.session.logged_in) {
      res.redirect('/homepage'); // render homepage.handlebars
      return;
    }
    res.render('login'); // render login.handlebars
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

router.get("/homepage", withAuth, async (req, res) => {
  // homepage route
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
    }); // render homepage.handlebars
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

module.exports = router; // export router
