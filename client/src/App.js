import logo from './logo.svg';
import './App.css';

import Button from "@mui/material/Button"
import AppBar from './AppBar'

// importing apollo (graphql JS) dependencies 
import { ApolloProvider, ApolloClient, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <AppBar>
        </AppBar>
      </div>
    </ApolloProvider>
  );
}

export default App;
