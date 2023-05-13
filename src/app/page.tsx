"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";

let client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql/",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
