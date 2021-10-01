const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost/game-search",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
