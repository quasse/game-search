import { isInlineFragment } from "@apollo/client/utilities";
import { Grid, gridClasses, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const Games = ({ game }) => {
  console.log("game ", game);

  return (
    <Card
      sx={{
        margin: "10px",
        width: `45vw`,
        height: "200px",
        overflow: "scroll",
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
            width="80%"
            // height="100"
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
        </CardContent>
      </div>
    </Card>
  );
};

export default Games;
