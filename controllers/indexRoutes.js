const router = require("express").Router(); // import express router

router.get("/", async (req, res) => {
  // homepage route
  try {
    res.render("homepage", {
      // render homepage.handlebars
    });
  } catch (err) {
    // catch errors
    res.status(500).json(err); // return error
  }
});

module.exports = router; // export router
