  const { Thought, User } = require('../models');

  const thoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
      Thought.find({})
        .populate({
          path: "user",
          select: "-__v",
        })
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    