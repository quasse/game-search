import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import Games from "./Components/Games";
//import "@mui/material";
//import "../Components/App.css";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GameDetail from "./Components/GameDetail";

// Apollo queries (Troy)
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// set link to graphql db, "proxy" in package.json provides local db connection(Troy)
const httpLink = createHttpLink({
  uri: "/graphql",
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}
function App() {
  // console.log("games", games);
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/game/:gameID" component={GameDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
