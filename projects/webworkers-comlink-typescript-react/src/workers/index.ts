import { expose } from "comlink";
import { addTwoNumbers } from "../AddNumbers.worker";

const exports = {
  addTwoNumbers,
};

export type AppWorkers = typeof exports;

expose(exports);
