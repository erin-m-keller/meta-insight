const router = require("express").Router();
const { Game, User, Gamereview } = require("../../models");

// GET all gameReviews
router.get("/", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.findAll({
      include: [{ model: User }, { model: Game }],
    });
    res.status(200).json(gamereviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.create({
      rating: req.body.rating,
      description: req.body.description,
      game_id: req.body.game_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(gamereviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!gamereviewData) {
      res.status(404).json({ message: "No gamereview found with this id!" });
      return;
    }

    res.status(200).json(gamereviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const gamereviewData = await Gamereview.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!gamereviewData) {
      res.status(404).json({ message: "No gamereview found with this id!" });
      return;
    }
    res.status(200).json(gamereviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
