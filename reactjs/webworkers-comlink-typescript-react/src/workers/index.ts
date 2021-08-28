import { expose } from "comlink";
import { addTwoNumbers } from "../AddNumbers.worker";
import { solidityCompiler } from "../SolidityCompiler.worker";

const exports = {
  addTwoNumbers,
  solidityCompiler,
};

export type AppWorkers = typeof exports;

expose(exports);
