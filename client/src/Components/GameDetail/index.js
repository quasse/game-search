import React, { useState, useEffect } from "react";

const GameDetail = (props) => {
  console.log(props.match.params.gameID);

  const [description, setDescription] = useState("");

  // when component mounts, do game api fetch
  useEffect(() => {
    const GAME_API = `https://api.rawg.io/api/games/${props.match.params.gameID}?key=${process.env.REACT_APP_API_KEY}`;
    fetch(GAME_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //setGames(data.results);
        setDescription(data.description_raw);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.gameID]);

  return (
    <div>
      <h1>game detail</h1>
      <p>{description}</p>
    </div>
  );
};

export default GameDetail;
