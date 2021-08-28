import React from 'react';
import { FontSizes, PrimaryButton, Text } from '@fluentui/react';

import { User } from '../../types/user';
import { useHistory } from 'react-router-dom';
import Counter from '../Counter';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/account/actions';
const user: User = {
  id: 1,
  firstName: 'fTest',
  lastName: 'lTest',
};

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const users = { loading: false, error: false, items: [{ ...user }] };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      style={{
        maxWidth: '520px',
        margin: 'auto',
      }}
    >
      <div style={{ fontSize: FontSizes.size32 }}>Hi {user.firstName}</div>
      <div style={{ fontSize: FontSizes.size24 }}>
        You're logged in with React & JWT!!
      </div>
      <Text as="h3" block={true}>
        Users from secure api end point:
      </Text>
      {users.loading && <em>Loading users...</em>}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      {users.items && (
        <ul>
          {users.items.map((user) => (
            <li key={user.id}>
              <Text block={true}>First Name: {user.firstName}</Text>
              <Text block={true}>Last Name: {user.lastName}</Text>
            </li>
          ))}
        </ul>
      )}
      <Text as="p" block={true}>
        <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
      </Text>
    </div>
  );
};

export default HomePage;
