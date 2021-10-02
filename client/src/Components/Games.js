import React from "react";

const Games = ({ game }) => (
  <div className="games" onClick={
      console.log("hello") 
  }> 
    <p>{game.name}</p>
    <img style={{width: '25vw'}} src={game.background_image} alt={game.name} />
  </div>
);
export default Games;
