import React from "react";
import ReactDOM from "react-dom";
import "./styles/output.css";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import Mutations from "./graphql/mutations";

import './styles/output.css';

const { VERIFY_USER } = Mutations;

export const cache = new InMemoryCache({
  dataIdFromObject: object => object._id || null
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const httpLink = createHttpLink({
  // uri: "http://localhost:1662/graphql",
  headers: {
    authorization: localStorage.getItem("auth-token")
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
  resolvers: {},
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

const token = localStorage.getItem("auth-token");
cache.writeData({
  data: {
    isLoggedIn: Boolean(token),
    currentUser: null,
    modalType: false,
    cart: []
  }
});


if(token){
  client.mutate({mutation: VERIFY_USER, variables: {token}})
    .then(({ data }) => {
      cache.writeData({
          data: {
            isLoggedIn: data.verifyUser.loggedIn,
            currentUser: Object.assign(data.verifyUser, {__typename: "user"}),
            cart: []
          }
      });
  })
}

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
