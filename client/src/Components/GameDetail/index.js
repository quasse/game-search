import React, { useState, useEffect } from "react";
import { ADD_GAME } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import "../../pages/gameDetail.css";
const GameDetail = (props) => {
  const [game, setGame] = useState("");

  //Call API for description of game
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

  //Add game to user's profile
  const [addGame, { error }] = useMutation(ADD_GAME);

  const handleClick = () => {
    try {
      addGame({
        variables: {
          title: game.name,
          image: game.background_image,
          gameId: game.id,
        },
      });
    } catch (e) {
      console.log(e);
    }
    window.location.assign("/");
  };

  return (
    <div className= "title">
      <h1 >{game.name}</h1>
      <img className= "img"
        style={{ width: "50vw", textAlign: "center" }}
        src={game.background_image_additional}
        alt={game.name}
      />
      <p>{game.description_raw}
     
      
      </p>

      {Auth.loggedIn() ? (
        <button onClick={handleClick}>Add game</button>
      ) : (
        <p>Log in to add this game to your profile</p>
      )}
    </div>
  );
};

export default GameDetail;
