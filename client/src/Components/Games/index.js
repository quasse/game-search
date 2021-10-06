import { isInlineFragment } from "@apollo/client/utilities";
import { Grid, gridClasses, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_GAME } from "../../utils/mutations";

import { Link } from "react-router-dom";

const Games = ({ game, isProfile = false }) => {
  const [deleteGame, { error }] = useMutation(DELETE_GAME);

  const handleClick = (event) => {
    const id = event.target.getAttribute("dataid");
    console.log(id);
    try {
      deleteGame({
        variables: {
          _id: id,
        },
      });
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };
  console.log("game ", game);

  return (
    <Card
      sx={{
        margin: "10px",
        width: `45vw`,
      }}
    >
      <div className="games" onClick={console.log("hello")}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            width="25vw"
            //style={{ width: "80%", outline: "auto" }}
            image={game.background_image || game.image}
            style={{ margin: "0 auto" }}
          />
          {/* <img
              
              src
              alt={game.name}
            /> */}
          <Link to={`/game/${game.id}`}>
            <p style={{ borderRadius: 1, outline: "1", textAlign: "center" }}>
              {game.name || game.title}
            </p>
          </Link>
          {isProfile && (
            <button dataid={game._id} onClick={handleClick}>
              Delete game
            </button>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default Games;
