import { Container, Button } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <Container>
      <Button href="/api/auth/login">Login</Button>
    </Container>
  );
};

export default LoginPage;
