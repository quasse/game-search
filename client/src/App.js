import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import Games from "./Components/Games";
//import "@mui/material";
//import "../Components/App.css";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GameDetail from "./Components/GameDetail";
import Profile from "./pages/Profile";
// Apollo queries (Troy)
import {
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloClient,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

// set link to graphql db, "proxy" in package.json provides local db connection(Troy)
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Route exact path="/signup" component={Signup} />
            <Route path="/game/:gameID" component={GameDetail} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
