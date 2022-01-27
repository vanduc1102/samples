import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';

import Dashboard from './components/Dashboard';

import { getLibrary } from './utils/web3React';

import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <Providers>
      <Dashboard />
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
}

export default App;
