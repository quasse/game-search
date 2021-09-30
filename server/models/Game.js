const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  title: {
    Type: String,
  },
  image: {
    Type: String,
  },
  rating: {
    Type: String,
  },
  suggestions: {
    Type: Number,
  },
  platforms: {
    Type: Array,
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
