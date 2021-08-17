import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Text,
  TextField,
} from '@fluentui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userService } from '../../services';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

interface Login {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const handleSubmit = async (userCredential: Login) => {
    try {
      await userService.login(userCredential.username, userCredential.password);
    } catch (error) {
      alert(error);
    }
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
    <div
      style={{
        margin: 'auto',
        maxWidth: '480px',
      }}
    >
      <MessageBar
        messageBarType={MessageBarType.info}
        isMultiline={true}
        dismissButtonAriaLabel="Close"
      >
        <Text as="p" block={true}>
          User: test
        </Text>
        <Text as="p" block={true}>
          Password: test
        </Text>
      </MessageBar>
      <Text variant="large" as="h2" block={true}>
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
        <br />
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
