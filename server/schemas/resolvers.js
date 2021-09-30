const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("games");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("games");
    },
    games: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Game.find(params);
    },
    game: async (parent, { _id }) => {
      return Game.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
  },
};

module.exports = resolvers;
