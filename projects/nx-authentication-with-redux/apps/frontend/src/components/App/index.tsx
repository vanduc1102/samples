import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import PrivateRoute from '../PrivateRoute';
import LoginAlert from '../LoginPage/LoginAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

export function App() {
  const isLogin = useSelector(({ account }: RootState) => account.isLogin);

  return (
    <div>
      {!isLogin && (
        <div
          style={{
            maxWidth: '320px',
            margin: 'auto',
          }}
        >
          <LoginAlert></LoginAlert>
        </div>
      )}
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
