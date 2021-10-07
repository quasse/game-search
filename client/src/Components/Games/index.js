import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_GAME } from "../../utils/mutations";
import "../../../src/index.css";
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
    <Card className="game-card"
    sx={{
      border:"3px solid",
      borderColor: 'rgba(1, 8, 18 .5)'
      

    }}
    >
      <div className="games" onClick={console.log("hello")}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: "trans",
            borderColor: 'rgba(1, 8, 18 .5)',
            paddingRight: '10px',
            paddingLeft: '10px',
            marginLeft: '10px',
            marginRight: '10px',
          }}
        >
          <CardMedia className= "game-card-img"
            component="img"
            width="25vw"
            height="325vw"
            border= "3px" 
            image={game.background_image || game.image}
     
          />
          <Link to={`/game/${game.id}`}>
            <div>
              <p
                style={{
                  borderRadius: "1",
                  outline: "4",
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
            <button className="button" dataid={game._id} onClick={handleClick}>
              Delete game
            </button>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default Games;
