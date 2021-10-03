import React, { useState, useEffect } from "react";

const GameDetail = (props) => {
  const [game, setGame] = useState("");

  useEffect(() => {
    const GAME_API = `https://api.rawg.io/api/games/${props.match.params.gameID}?key=${process.env.REACT_APP_API_KEY}`;
    fetch(GAME_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGame(data);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.gameID]);

  return (
    <div>
      <h1>{game.name}</h1>
      <img
        style={{ width: "50vw" }}
        src={game.background_image_additional}
        alt={game.name}
      />
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetail;
