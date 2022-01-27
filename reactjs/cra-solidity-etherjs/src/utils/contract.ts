import { Contract, ethers } from 'ethers';

export function getContractBinary(
  compileResult: any,
  fileName = 'storage.sol',
  contractName = 'SimpleStorage'
): string {
  const byteCode =
    compileResult?.contracts[fileName]?.[contractName].evm.bytecode.object;

  return byteCode ? `0x${byteCode}` : '';
}

export function getContractABI(
  compileResult: any,
  fileName = 'storage.sol',
  contractName = 'SimpleStorage'
): string {
  return compileResult?.contracts[fileName]?.[contractName].abi || '';
}

export const createContractInstance = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
): Contract => {
  return new ethers.Contract(address, abi, signer);
};