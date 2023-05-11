// import express router
const gamereviewRouter = require("express").Router();
const Gamereview = require('../../models/Gamereview')
// gamereviewRouter.get("/", async (req, res) => {
//   // create route
//   try {
//     res.render("create", {
//       // render create.handlebars
//     });
//   } catch (err) {
//     // catch errors
//     res.status(500).json(err); // return error
//   }
// });

// will be adding withAuth helper in different branch
gamereviewRouter.post('/', async (req, res) => {
    try {
      const newGamereview = await Gamereview.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newGamereview);
    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = gamereviewRouter; // export gamereview router
