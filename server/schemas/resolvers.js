const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate(
          "games"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addGame: async (parent, args, context) => {
      if (context.user) {
        console.log({ ...args });
        const game = await Game.create({ ...args });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { games: game._id } },
          { new: true }
        );

        return game;
      }
    },
  },
};

module.exports = resolvers;
