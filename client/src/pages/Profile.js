import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { loading, data } = useQuery(QUERY_ME);

  console.log(loading);

  console.log("data: ", data);

  const user = data?.me || {};

  return (
    <div>
      <h2>Viewing{` ${user.username}'s profile`}</h2>
    </div>
  );
};

export default Profile;
