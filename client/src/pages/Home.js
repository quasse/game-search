import react, { useEffect, useState } from "react";
import Games from "../Components/Games";

const Home = () => {
  // game state for api fetch
  const [games, setGames] = useState([]);

  const GAME_API = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page1`;

  const SEARCH_API = `https://api.rawg.io/api/games?key=${
    process.env.REACT_APP_API_KEY
  }&search=${"<some_state_variable>"}`;

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

  return (
    <main>
      <h1>Home page</h1>
      <div>
        {games.length > 0 && games.map((game) => <Games game={game} />)}
      </div>
    </main>
  );
};

export default Home;
