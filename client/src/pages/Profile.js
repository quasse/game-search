import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { DELETE_GAME } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Games from "../Components/Games";
import { useMutation } from "@apollo/client";

const Profile = (props) => {
  const { loading, data } = useQuery(QUERY_ME);

  const [deleteGame, { error }] = useMutation(DELETE_GAME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return <h4>You must be logged in to view this page</h4>;
  }

  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
    const id = event.target.parentElement.id;
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

  console.log("data: ", data);

  const user = data?.me || {};

  console.log("user", user.games);

  return (
    <div>
      <h2>Viewing{` ${user.username}'s profile`}</h2>
      <div>
        {user.games.length > 0 &&
          user.games.map((game) => (
            <div id={game._id}>
              <Link to={`/game/${game.gameId}`}>
                <Games game={game} />
              </Link>
              <button onClick={handleClick}>Delete game</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
