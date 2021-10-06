import React from "react";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import {QUERY_ME} from "../../utils/queries";

const User = () => {
    const {loading, data} = useQuery(QUERY_ME);
    const getUsername = function(){
        let username = "";
        if(!loading && Auth.loggedIn()){
            username = data.me.username;
            return username;
        }else{
            return username;
        }
    }
            return (
                <div>
                    {getUsername()}
                </div>
              );
};

export default User;