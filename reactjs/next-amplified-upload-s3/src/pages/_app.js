import "../styles/globals.css";
import { configureAmplify } from "../utils/amplify-config";
import { SnackbarProvider } from "notistack";
import { Container } from "@material-ui/core";

configureAmplify();

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SnackbarProvider>
  );
}

export default MyApp;
