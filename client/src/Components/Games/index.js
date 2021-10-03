import React from "react";

const Games = ({ game }) => {
  console.log("game ", game);
  return (
    <div className="games" onClick={console.log("hello")}>
      <p>{game.name || game.title}</p>
      <img
        style={{ width: "25vw" }}
        src={game.background_image || game.image}
        alt={game.name}
      />
    </div>
  );
};

export default Games;
