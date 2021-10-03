const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleWare } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("mongodb");
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
