const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gameId: {
    type: Number,
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
