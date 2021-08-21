import React from 'react';
import { Link, Text } from '@fluentui/react';

import { User } from '../../types/user';

const HomePage: React.FC = () => {
  const user: User = {
    id: 1,
    firstName: 'fTest',
    lastName: 'lTest',
  };

  const users = { loading: false, error: false, items: [{ ...user }] };

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
          {users.items.map((user, index) => (
            <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>
          ))}
        </ul>
      )}
      <Text as="p" block={true}>
        <Link to="/login">Logout</Link>
      </Text>
    </div>
  );
};

export default HomePage;
