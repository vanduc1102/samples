import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import PrivateRoute from '../PrivateRoute';
import LoginAlert from '../LoginPage/LoginAlert';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getLoginStatus();
  }, [location]);

  function getLoginStatus() {
    const serializedUser = localStorage.getItem('user');
    setIsLoggedIn(!!serializedUser);
  }

  return (
    <div>
      {!isLoggedIn && (
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
