import React from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { useInput } from "../utils/forms";
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

const Signup: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const history = useHistory();

  const { value: name, bind: bindName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: phone, bind: bindPhone } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");

  const handleSignUp = async (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      enqueueSnackbar(
        "Password and Confirm Password should be same",
        { variant: 'error' }
      );
      return;
    }
    try {
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          email,
          name,
          phone_number: phone,
        }
      });
      enqueueSnackbar("Success!! Signup was successful", { variant: "success" });
      history.push("/confirmation");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error!! " + (error as any).message, { variant: "error" });
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
      onSubmit={handleSignUp}
    >
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        {" "}
        New Account Registration
      </h1>
      <Field label="Name" {...bindName} />
      <Field label="Email" {...bindEmail} type="email" />
      <Field label="Phone" {...bindPhone} type="tel" />
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
        disabled={loading}
      >
        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
        Sign Up
      </Button>
      <DLink to="/signin">go to login &rarr;</DLink>
    </form>
  );
};

export default Signup;