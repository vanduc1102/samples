import { createReducer } from '@reduxjs/toolkit';

import { login, logout } from './actions';
import { AccountState } from './types';

const serializedUser = localStorage.getItem('user');
const cachedUser = serializedUser ? JSON.parse(serializedUser) : undefined;

const initialState: AccountState = {
  isLogin: !!cachedUser,
  user: cachedUser,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(login.fulfilled, (_, action) => {
      return {
        isLogin: true,
        user: action.payload,
      };
    })
    .addCase(logout.fulfilled, (_, action) => {
      return {
        isLogin: false,
        user: undefined,
      };
    })
);
