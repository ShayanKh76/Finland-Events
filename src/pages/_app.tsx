import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "../../styles/main.scss";
import "tailwindcss/tailwind.css";
import Layout from "./layout";
import { client } from "@/components/Events/Events.graphql";

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
