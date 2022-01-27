/* eslint-disable no-restricted-globals */
import { expose } from "comlink";
import * as wrapper from "solc/wrapper";
const ctx: Worker = self as any;

export function compileSolidity(data: CompileContractArgs) {
  const { solidityVersion, contractFileName, content } = data;
  (self as any).importScripts(
    `https://solc-bin.ethereum.org/bin/soljson-${solidityVersion}.js`
  );
  const solc = wrapper((ctx as any).Module);

  const result: string = solc.compile(
    createCompileInput(contractFileName, content)
  );

  return JSON.parse(result);
}

const exports = {
  compileSolidity,
};

export type CompileContractArgs = {
  command: string;
  solidityVersion: string;
  contractFileName: string;
  content: string;
};

export type WorkerType = typeof exports;
expose(exports);

function createCompileInput(
  fileName = "storage.sol",
  fileContent: string
): string {
  const CompileInput = {
    language: "Solidity",
    sources: {
      [fileName]: {
        content: fileContent,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  return JSON.stringify(CompileInput);
}
