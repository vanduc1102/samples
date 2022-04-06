import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "./../utils/forms";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

const Field = styled(TextField)({
  margin: "10px 0",
});

const DLink = styled(Link)({
  margin: "15px 0",
  textAlign: "right",
});

const SignUp: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const handleSubmit = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Auth.signIn(email, password);
      console.log("login response: ", response);
      enqueueSnackbar("Success!! Login Successfully", { variant: "success" });
      history.push("/");
    } catch (error) {
      enqueueSnackbar("Error!!" + (error as any).message, { variant: "error" });
    }
    setLoading(false);
  };

  return (
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
        Sign in to an existing account
      </h1>
      <Field label="Email" {...bindEmail} type="email" />
      <Field label="Password" type="password" {...bindPassword} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Login to Your Account
      </Button>
      <DLink to="/signup">make a new account &rarr;</DLink>
    </form>
  );
};

export default SignUp;
