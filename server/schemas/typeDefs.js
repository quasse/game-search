const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    games: [Game]
  }

  type Game {
    _id: ID
    title: String
    image: String
    rating: String
    suggestions: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    games(username: String!): [Game]
    game(_id: ID!): Game
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(
      title: String!
      image: String!
      rating: String
      suggestions: Int
    ): Game
    deleteGame(_id: ID!): Game
  }
`;

module.exports = typeDefs;
