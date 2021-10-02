import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import Games from "./Components/Games";
//import "@mui/material";
//import "../Components/App.css";

import Header from "./Components/Header";
import Home from "./pages/Home";

function App() {
  // console.log("games", games);
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
