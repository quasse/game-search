import React, { useEffect, useState } from "react";
import Games from "../Components/Games";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
//apollo queries (Troy)
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { ADD_USER } from "../utils/mutations";
import { LOGIN_USER } from "../utils/mutations";

// apollo function that returns loading and data properties(Troy)
// asynchronous, loading property indicates if fetch is complete or not
// function QueryUsers(){
//   const { loading, data } = useQuery(QUERY_USERS);
//   if (!loading){
//     const users = data?.users || [];
//     console.log(users);
//   }
// };
// async function LoginUser(){
//   const [loginUser, { error }] = useMutation(LOGIN_USER);
//     try{
//   const {data} = await loginUser({
//     variables: {
//       username: "troy123",
//       password: "password123",
//       email: "email@gmail.com",
//     }
//   });
//   console.log(data);
// }catch(error){
//   console.log(error);
// }
// };

// We will use this but if it runs without an event listener it will return errors
// async function AddUser(){
//   const [addUser, { error }] = useMutation(ADD_USER);
//   try{
//   const {data} = await addUser({
//     variables: {
//       username: "troy1234",
//       password: "password1234",
//       email: "email1234@gmail.com",
//     }
//   });
//   console.log(data);
// }catch(error){
//   console.log(error);
// }
// };

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Home = () => {
  // QueryUsers();
  // AddUser();
  // LoginUser();

  // game state for api fetch
  const [games, setGames] = useState([]);

  // create a state for the user input
  const [searchInput, setSearchInput] = useState("");

  const GAME_API = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page1`;

  // when component mounts, do game api fetch
  useEffect(() => {
    fetch(GAME_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setGames(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      return;
    }
    const SEARCH_API = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${searchInput}`;

    fetch(SEARCH_API)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main classNmae="home-app" style={{ backgroundColor: "#8e8e8e" }}>
      <form onSubmit={handleSearchSubmit}>
        <Search>
          <IconButton
            size="medium"
            aria-label="search"
            color="inherit"
            role="button"
            onClick={handleSearchSubmit}
          >
            <SearchIcon />
          </IconButton>
          <StyledInputBase
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </form>

      <div>
        {games.length > 0 && games.map((game) => <Games game={game} />)}
      </div>
    </main>
  );
};

export default Home;
