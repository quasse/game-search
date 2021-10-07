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
    <Card className="game-card">
      <div className="games" onClick={console.log("hello")}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "trans",
          }}
        >
          <CardMedia
            component="img"
            width="25vw"
            height="325vw"
            image={game.background_image || game.image}
            // style={{ margin: "0 auto", borderRadius: 1, outline: "1" }}
          />
          <Link to={`/game/${game.id}`}>
            <div>
              <p
                style={{
                  borderRadius: 1,
                  outline: "1",
                  textAlign: "center",
                  color: "black",
                  fontSize: "150%",
                }}
              >
                {game.name || game.title}
              </p>
            </div>
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
