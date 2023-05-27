import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "../../styles/styles.css";

import "tailwindcss/tailwind.css";
import Layout from "./layout";
let client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql/",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
