import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import Link from "next/link";
import { useRouter } from "next/router";

const Field = styled(TextField)({
  margin: "1rem 0",
});

const Confirmation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const { value: email, bind: bindEmail } = useInput("");
  const { value: code, bind: bindCode } = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await Auth.confirmSignUp(email, code);
      enqueueSnackbar("Success!! Verified Successfully", {
        variant: "success",
      });
      router.push("/signin");
    } catch (error) {
      enqueueSnackbar("Error!!" + error.message, { variant: "error" });
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
        onSubmit={handleSubmit}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          {" "}
          Verify Your Account
        </h1>
        <Field label="Email" {...bindEmail} type="email" />
        <Field label="Verification Code" {...bindCode} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          style={{
            margin: "1rem 0",
          }}
          disabled={loading}
        >
          {loading && (
            <CircularProgress size={20} style={{ marginRight: 20 }} />
          )}
          Verify your account
        </Button>
        <Link href="/signup">
          <a>Make an account &rarr;</a>
        </Link>
      </form>
    </Box>
  );
};

export default Confirmation;
