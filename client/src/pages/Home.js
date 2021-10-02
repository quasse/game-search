import react, { useEffect, useState } from "react";
import Games from "../Components/Games";
//apollo queries (Troy)
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';

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

const Home = () => {


  // QueryUsers();
  // AddUser();
  // LoginUser();


  // game state for api fetch
  const [games, setGames] = useState([]);

  const GAME_API = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page1`;

  const SEARCH_API = `https://api.rawg.io/api/games?key=${
    process.env.REACT_APP_API_KEY
  }&search=${"<some_state_variable>"}`;

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

  return (
    <main>
      <h1>Home page</h1>
      <div>
        {games.length > 0 && games.map((game) => <Games game={game} />)}
      </div>
    </main>
  );
};

export default Home;
