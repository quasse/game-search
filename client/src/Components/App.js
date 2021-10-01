import React, { useEffect, useState } from "react";
import AppBar from "../AppBar";
import Games from "./Games";
import "@mui/material";
import "../Components/App.css";

const GAME_API = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page1`;

const SEARCH_API = `https://api.rawg.io/api/games?key=${
  process.env.REACT_APP_API_KEY
}&search=${"<some_state_variable>"}`;

function App() {
  
  // game state for api fetch
  const [games, setGames] = useState([]);

  // when component mounts, do game api fetch
  useEffect(() => {
    fetch(GAME_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGames(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log("games", games);
  return (
    <div>
              <AppBar position="static"/>

        {games.length > 0 && games.map((game) => <Games game={game} />)}
    </div>
  );
}

export default App;
