/// <reference lib="webworker" />
import * as wrapper from "solc/wrapper";

interface SolcPayload {
  command: string;
  content: string;
}
export function solidityCompiler({ content, command }: SolcPayload) {
  console.log("loading solc");
  importScripts("https://solc-bin.ethereum.org/bin/soljson-latest.js");
  console.log("finished solc");
  const solc = wrapper((self as any).Module);
  var input = {
    language: "Solidity",
    sources: {
      "contract.sol": {
        content
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

  return solc.compile(JSON.stringify(input));
}
