const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost/game-search",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
