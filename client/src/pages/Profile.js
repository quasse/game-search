import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Games from "../Components/Games";
import "./profile.css";
const Profile = (props) => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return <h4>You must be logged in to view this page</h4>;
  }

  console.log("data: ", data);

  const user = data?.me || {};

  console.log("user", user.games);

  return (
    <div className= "profile-Container">
      <h2>Viewing{` ${user.username}'s profile`}</h2>
      <div>
        {user.games.length > 0 ? (
          user.games.map((game) => (
            // <div id={game._id}>
            //   <Link to={`/game/${game.gameId}`}>
            //     <Games game={game} />
            //   </Link>
            //   <button onClick={handleClick}>Delete game</button>
            // </div>
            <Games key={game._id} game={game} isProfile={true} />
          ))
        ) : (
          <h4>Add games to your profile to see them here</h4>
        )}
      </div>
    </div>
  );
};

export default Profile;
