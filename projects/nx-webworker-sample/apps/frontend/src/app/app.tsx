import { useEffect, useMemo, useState } from 'react';
import { StyledApp } from './styled';

export function App() {
  const [mintResult, setMintResult] = useState({
    nonce: 0,
    hash: '',
  });

  const mintWorker = useMemo(() => {
    return new Worker('../mint.worker.ts', {
      name: 'Mint',
      type: 'module',
    });
  }, []);

  const handleWebWorkerTask = () => {
    const currentHash = Date.now();
    console.log('Sending : ', currentHash);
    mintWorker.postMessage({
      difficulty: Math.floor(Math.random() * 15),
      transactionHash: Date.now(),
    });
  };

  useEffect(() => {
    mintWorker.onmessage = (event: any) => {
      console.log('from worker event:', event.data);
      setMintResult(event.data);
    };
    return () => {
      mintWorker.terminate();
    };
  }, [mintWorker]);

  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to frontend!</h1>
      </header>
      <main>
        <h2>Resources &amp; Tools</h2>
        <ul className="resources">
          <li className="col-span-2">
            <button className="resource flex" onClick={handleWebWorkerTask}>
              Mint with WebWorker
            </button>
          </li>
        </ul>
        <div>
          <h4>Mint result:</h4>
          <p>{JSON.stringify(mintResult, null, 4)}</p>
        </div>
      </main>
    </StyledApp>
  );
}

export default App;
