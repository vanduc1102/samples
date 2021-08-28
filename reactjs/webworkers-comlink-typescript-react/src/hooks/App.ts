import { wrap, releaseProxy } from "comlink";
import { useEffect, useState, useMemo } from "react";

export function useAddTwoNumbersWorker(number1: number, number2: number) {
  const [data, setData] = useState({
    loading: false,
    total: undefined as number | undefined,
  });

  const { workerApi } = useWorker();

  useEffect(() => {
    setData({
      loading: true,
      total: undefined,
    });

    workerApi.addTwoNumbers(number1, number2).then((total) => {
      setData({
        loading: false,
        total,
      });
    });
  }, [workerApi, setData, number1, number2]);

  return data;
}

export function useWorker() {
  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanUp(), []);

  useEffect(() => {
    const { cleanUp } = workerApiAndCleanup;
    return () => {
      cleanUp();
    };
  }, [workerApiAndCleanup]);
  return workerApiAndCleanup;
}

function makeWorkerApiAndCleanUp() {
  const worker = new Worker("../workers", {
    name: "AppWorkers",
    type: "module",
  });

  const workerApi = wrap<import("../workers").AppWorkers>(worker);

  const cleanUp = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  const result = { workerApi, cleanUp };
  return result;
}
