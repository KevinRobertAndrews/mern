const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Idea = require("../../models/Idea");

// @route   POST api/ideas
// @desc    Create an idea
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required.").not().isEmpty(),
      check("description", "Description is required.").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

    const { title, description } = req.body;

    try {
      const newIdea = await new Idea({
        user: req.user.id,
        title,
        description,
      });

      const idea = await newIdea.save();
      res.json(idea);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error.");
    }
  }
);

// @route   GET api/ideas
// @desc    Get all ideas
// @access  Private
router.get("/", auth, async (req, res) => {
  const idea = await Idea.find().select("-_id").select("-__v");
  res.json(idea);
});

module.exports = router;
