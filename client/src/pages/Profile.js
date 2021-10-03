import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import Games from "../Components/Games";

const Profile = (props) => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("data: ", data);

  const user = data?.me || {};

  console.log("user ", user.games);

  return (
    <div>
      <h2>Viewing{` ${user.username}'s profile`}</h2>
      <div></div>
      <div>
        {user.games.length > 0 &&
          user.games.map((game) => <Games game={game} />)}
      </div>
    </div>
  );
};

export default Profile;
