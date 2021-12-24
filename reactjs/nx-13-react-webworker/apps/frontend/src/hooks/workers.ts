import { wrap, releaseProxy } from 'comlink';
import { useEffect, useMemo } from 'react';

export function useWorker() {
  const workerInstance = useMemo(() => makeWorker(), []);
  useEffect(() => {
    const { cleanup } = workerInstance;
    return () => {
      cleanup();
    };
  }, [workerInstance]);

  return workerInstance
}

function makeWorker() {
  const worker = new Worker( new URL('../workers/index.ts', import.meta.url));

  const services = wrap<import('../workers').WorkerType>(worker);

  const cleanup = () => {
    services[releaseProxy]();
    worker.terminate();
  };

  return {
    services,
    cleanup,
  };
}
