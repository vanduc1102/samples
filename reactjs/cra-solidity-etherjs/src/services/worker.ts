import { wrap, releaseProxy } from "comlink";
import { CompileContractArgs, WorkerType } from "../workers";

function createWorker() {
  const baseWorker = new Worker("../workers/index.ts", {
    name: "webworkers",
    type: "module",
  });

  const services = wrap<WorkerType>(baseWorker);

  const cleanup = () => {
    services[releaseProxy]();
    baseWorker.terminate();
  };

  return {
    services,
    cleanup,
  };
}

async function compileContract(arg: CompileContractArgs) {
  const worker = createWorker();
  const compiled = await worker.services.compileSolidity(arg);
  worker.cleanup();
  return compiled;
}

const exports = {
  compileContract,
};

export type WorkerService = typeof exports;

export default exports;
