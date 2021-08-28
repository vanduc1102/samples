import { createAsyncThunk } from '@reduxjs/toolkit';
import { Login } from '../../components/LoginPage/types';
import { userService } from '../../services';
import { User } from '../../types/user';

export const login = createAsyncThunk<User, Login>(
  'account/login',
  async ({ username, password }) => {
    const response = await userService.login(username, password);
    return response.data;
  }
);

export const logout = createAsyncThunk('account/logout', async () => {
  const response = await userService.logout();
  return response;
});
