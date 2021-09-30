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
    imange: String
    rating: String
    suggestions: Int
    platforms: [String]
  }

  type Query {
    users: [User]
    user(username: String!): User
    games(username: String!): [Game]
    game(_id: ID!): Game
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
