import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Text,
  TextField,
} from '@fluentui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

interface Login {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const handleSubmit = async (values: Login) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik<Login>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <MessageBar
        messageBarType={MessageBarType.info}
        isMultiline={true}
        dismissButtonAriaLabel="Close"
      >
        <Text as="div">User: test</Text> <br />
        <Text as="div">Password: test</Text>
      </MessageBar>
      <Text variant="large" as="h2">
        Login
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.username}
          value={formik.values.username}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.password}
          value={formik.values.password}
        />
        <PrimaryButton
          text="Login"
          type="submit"
          disabled={formik.isSubmitting}
        ></PrimaryButton>
      </form>
    </div>
  );
};

export default LoginPage;
