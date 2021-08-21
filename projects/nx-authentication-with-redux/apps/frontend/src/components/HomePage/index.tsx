import React from 'react';
import { PrimaryButton, Text } from '@fluentui/react';

import { User } from '../../types/user';
import { useHistory } from 'react-router-dom';
const user: User = {
  id: 1,
  firstName: 'fTest',
  lastName: 'lTest',
};

const HomePage: React.FC = () => {
  const { push } = useHistory();

  const users = { loading: false, error: false, items: [{ ...user }] };
  const handleLogout = () => {
    localStorage.removeItem('user');
    push({
      pathname: '/login',
    });
  };

  return (
    <div
      style={{
        maxWidth: '520px',
        margin: 'auto',
      }}
    >
      <Text as="h1" block={true}>
        Hi {user.firstName}
      </Text>
      <Text as="div" block={true}>
        You're logged in with React & JWT!!
      </Text>
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
