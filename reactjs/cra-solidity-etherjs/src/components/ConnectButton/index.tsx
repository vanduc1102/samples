import React from 'react';
import { Button } from 'antd';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import { injected } from '../../configurations/wallets/injected';
import { useEagerConnect } from '../../hooks/useAuth';

const ConnectButton: React.FC = () => {
  useEagerConnect();
  const { activate, active, deactivate } = useWeb3React<Web3Provider>();

  const handleConnect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  return active ? (
    <Button onClick={handleDisconnect} danger>
      Disconnect
    </Button>
  ) : (
    <Button onClick={handleConnect}>Connect to MetaMask</Button>
  );
};

export default ConnectButton;
