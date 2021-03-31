import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';



let uriLocal = "http://localhost:4000/graphql"

const client = new ApolloClient({
  uri: uriLocal,
  cache: new InMemoryCache()
});

function App() {
  return (

    
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>

          <Route path="/" component={ Home } exact />
          <Route path="/register" component={ Register } exact />
          <Route path="/login" component={ Login } exact />

        </Switch>
      </BrowserRouter>
    </ ApolloProvider>

  );
}

export default App;
