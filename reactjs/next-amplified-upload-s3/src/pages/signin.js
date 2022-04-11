import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

import { useInput } from "./../utils/forms";
import { Box, Typography } from "@material-ui/core";

const Field = styled(TextField)({
  margin: "1rem 0",
});

export default function SignIn() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await Auth.signIn(email, password);
      console.log("login response: ", response);
      enqueueSnackbar("Success!! Login Successfully", { variant: "success" });
      router.push("/");
    } catch (error) {
      enqueueSnackbar("Error!!" + error.message, { variant: "error" });
    }
    setLoading(false);
  };

  return (
    <Box>
      <Head>Sign In</Head>
      <div>
        <Typography variant="h4">
            Sign in to an existing account
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onSubmit={handleSubmit}
        >
          <Field label="Email" {...bindEmail} type="email" />
          <Field label="Password" type="password" {...bindPassword} />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{margin: '1rem 0'}}
            disabled={loading}
          >
            {loading && (
              <CircularProgress size={20} style={{ marginRight: 20 }} />
            )}
            Login to Your Account
          </Button>
          <Link href="/signup">
            <a>make a new account &rarr;</a>
          </Link>
        </form>
      </div>
    </Box>
  );
}
