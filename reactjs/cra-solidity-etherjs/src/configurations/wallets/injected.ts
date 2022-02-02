import { InjectedConnector } from '@web3-react/injected-connector';
import { BSC_CHAIN_IDS } from '../../constants';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42 , ...BSC_CHAIN_IDS],
});
