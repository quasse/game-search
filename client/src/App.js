import React, { useEffect, useState } from 'react';
import './App.css';
import Games from './components/Game';

const GAME_API = "https://api.rawg.io/api/games?key=5e9382c647414169a298896429b9ccaf&page1";

//const SEARCH_API = "https://api.rawg.io/api/games?key=5e9382c647414169a298896429b9ccaf&search=";

function App() {
  // const games = ['1','2','3']
  const [ games, setGames ] = useState([]);

  useEffect(() =>{
    fetch(GAME_API).then(res => res.json())
    .then(data =>{
      console.log(data.results);
      setGames(data.results);
    });

  },[]);

  return <div>
    {games.length > 0 && games.map((game) => 
      <Games key={game.id} data = {game} />
    )} 
  </div>;
    }

export default App;
 