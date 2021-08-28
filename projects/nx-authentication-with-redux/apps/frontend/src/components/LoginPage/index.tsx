import { PrimaryButton, Text, TextField } from '@fluentui/react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { userService } from '../../services';
import { RootState } from '../../state';
import { login } from '../../state/account/actions';
import { Login } from './types';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export * from './LoginAlert';

const LoginPage = () => {
  const account = useSelector((state: RootState) => state.account);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (userCredential: Login) => {
    try {
      dispatch(login(userCredential));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (account.isLogin) {
      push({
        pathname: '/',
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.isLogin]);

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
