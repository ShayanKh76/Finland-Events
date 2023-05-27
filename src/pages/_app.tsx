import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "../../styles/styles.css";
import { AppStateProvider } from "./AppState";
import "tailwindcss/tailwind.css";
import Layout from "./layout";
let client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql/",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppStateProvider>
    </ApolloProvider>
  );
}

export default MyApp;
