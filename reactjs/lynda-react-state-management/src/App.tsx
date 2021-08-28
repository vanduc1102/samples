import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

import ProTip from "./components/atoms/ProTip";
import Copyright from "./components/atoms/Copyright";

function App(): React.ReactElement {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
