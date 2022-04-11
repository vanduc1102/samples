import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box } from "@material-ui/core";

const Field = styled(TextField)({
  margin: "10px 0",
});

const Signup = () => {
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const { value: name, bind: bindName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      enqueueSnackbar("Password and Confirm Password should be same", {
        variant: "error",
      });
      return;
    }
    try {
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          email,
          name,
        },
      });
      enqueueSnackbar("Success!! Signup was successful", {
        variant: "success",
      });
      router.push("/confirmation");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error!! " + error.message, { variant: "error" });
    }
    setLoading(false);
  };

  return (
    <Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onSubmit={handleSignUp}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          {" "}
          New Account Registration
        </h1>
        <Field label="Name" {...bindName} />
        <Field label="Email" {...bindEmail} type="email" />
        <Field label="Password" type="password" {...bindPassword} />
        <Field
          label="Confirm Password"
          type="password"
          {...bindConfirmPassword}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          style={{ margin: "1rem 0" }}
          disabled={loading}
        >
          {loading && (
            <CircularProgress size={20} style={{ marginRight: 20 }} />
          )}
          Sign Up
        </Button>
        <Link href="/signin">
          <a>go to login &rarr;</a>
        </Link>
      </form>
    </Box>
  );
};

export default Signup;
