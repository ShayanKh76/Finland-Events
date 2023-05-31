"use client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { client } from "@/components/Events/Events.graphql";
import React from "react";

export default function Home() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
}
