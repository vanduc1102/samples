import "@/frontend/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/frontend/components/Layout";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/frontend/lib/apollo";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}
